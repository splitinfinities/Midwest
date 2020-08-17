import check from 'validator';
import zxcvbn, { ZXCVBNResult } from 'zxcvbn';

export default class Validator {
	element: any
	value: string
	custom: CustomFunction;
	customResult: boolean
	currentStrength: number;
	zxcvbnResult: ZXCVBNResult;
	methods: string[]
	errors: { message?: string, method?: string }[] = []

	constructor(element: any, custom?: CustomFunction) {
    this.element = element
    this.custom = custom
		this.prepare()
	}

	async validate(instance: any): Promise<FormResult> {
		try {
			this.errors = []
			this.element = instance
			this.value = await this.element.value;

			if (!this.element.novalidate) {
				await this.tests()
			}
		} catch (e) {
			console.error(e)
		}
		
		return this.results()
	}
  
  get strength(): any {
		return this.zxcvbnResult.score;
  }

	prepare() {
		this.methods = []

		if (this.element.required) {
			this.methods.push("required")
		}

		if (this.element.hasAttribute("match")) {
			this.methods.push("match")
		}

		if (this.element.hasAttribute("type")) {
			this.methods.push(this.element.getAttribute("type"))
		}

		if (this.element.nodeName === "SA-RICH-TEXT") {
			this.methods.push("midwest-rich-text");
		}
	}

	results(): FormResult {
		const valid = (this.errors.length === 0)
    
		return {
			name: this.element.name,
			value: this.value,
			strength: this.currentStrength,
			valid,
			errors: this.errors,
		}
	}

	async tests() {
		if (this.element.type === "password") { this.zxcvbnResult = zxcvbn(this.element?.value ?? ""); }
		this.currentStrength = (this.element.type === "password") ? this.zxcvbnResult.score : undefined;

		if (this.custom) {
			const customMethods = Object.keys(this.custom);

      // Method can be a function (allowing for custom messages)
      // or object with test method and static message
			customMethods.forEach((method) => {
        // tslint:disable-next-line: no-shadowed-variable
        const check = this.custom[method];
        if (typeof check === "function") {
					// tslint:disable-next-line: no-shadowed-variable
          const result = check();
          if (!result.test) {
            this.addError(method, result.message)
          }
        } else {
					// tslint:disable-next-line: no-shadowed-variable
          const result = check.test();
          if (!result) {
            this.addError(method, check.message)
          }
        }
			})
		}

		const result = await this.checkString();

		if (!result) {
			const halt = this.checkEmpty();
			
			if (!halt) {
				this.checkEmail()
				this.checkNumber()
				this.checkColor()
				this.checkTelephone()
				this.checkPostalCode()
				this.checkIP()
				this.checkURL()
				this.checkPassword()
				this.checkMatches()
				this.checkCurrency()
				await this.checkRadioChecked()
			}
		}
	}

	addError(method: string, message: string) {
		this.errors.push({ method, message })
	}

	checkHasName() {
		const result = !this.element.name;

		if (result) {
			this.addError("name", "This field needs a name.")
		}

		return result;
	}

	checkString() {
		// midwest-rich-text:value should not need to be checked here
		if (check.isIn("midwest-rich-text", this.methods)) return false;

		let result = false;

		if (check.isIn("required", this.methods)) {
			result = typeof this.value === "undefined" || this.value === "";

			if (result) {
				this.addError("string", "This field is required.")
			}
		}

		return result;
	}

	checkEmpty() {
		if (check.isIn("required", this.methods)) {
			let result = false; 
			
			if (this.element.tagName === "SA-INPUT-TAGS") {
				result = this.value.length === 0;
			} else if (this.element.tagName === "SA-SELECT") {
				result = this.element.multiple ? this.value && this.value.length === 0 : check.isEmpty(this.value);
			} else if (this.element.type === "radio") {
				result = this.value && this.value.length === 0;
			} else if (typeof this.value === "object" && this.value !== null) {
				// @ts-ignore
				result = this.value && this.value.length === 0
			} else {
				result = check.isEmpty(this.value ?? '')
			}

			if (!!result) {
				this.addError("required", "This field is required.")
			}

			return !!result;
		} else {
			return false
		}
	}

	checkEmail() {
		if (check.isIn("email", this.methods) && !!this.value) {
			const result = check.isEmail(this.value)

			if (!result) {
				this.addError("email", "Please enter a valid email.")
			}
		}
	}

	checkNumber() {
		if (check.isIn("number", this.methods) && !!this.value) {
			const result = check.isNumeric(this.value)

			if (!result) {
				this.addError("number", "Please enter a valid number.")
			}
		}
	}

	checkColor() {
		if (check.isIn("color", this.methods) && !!this.value) {
			const result = check.isHexColor(this.value)

			if (!result) {
				this.addError("color", "Please enter a valid color.")
			}
		}
	}

	checkURL() {
		if (check.isIn("url", this.methods) && !!this.value) {
			const result = check.isURL(this.value)

			if (!result) {
				this.addError("url", "Please enter a valid URL.")
			}
		}
	}

	checkIP() {
		if (check.isIn("ipv4", this.methods) && !!this.value) {
			const result = check.isIP(this.value, 4)

			if (!result) {
				this.addError("ipv4", "Please enter a valid IP Address.")
			}
		}

		if (check.isIn("ipv6", this.methods) && !!this.value) {
			const result = check.isIP(this.value, 6)

			if (!result) {
				this.addError("ipv6", "Please enter a valid IP Address.")
			}
		}
	}

	checkTelephone() {
		if (check.isIn("tel", this.methods) && !!this.value) {
			const result = check.isMobilePhone(this.value, 'any')

			if (!result) {
				this.addError("tel", "Please enter a valid phone number.")
			}
		}
	}
  
	checkPostalCode() {
		if (check.isIn("postal-code", this.methods) && !!this.value) {
			const result = check.isPostalCode(this.value, 'any')

			if (!result) {
				this.addError("postal-code", "Please enter a valid postal code.")
			}
		}
	}

	checkPassword() {
		if (check.isIn("password", this.methods) && !!this.value) {
			this.currentStrength = this.zxcvbnResult.score;

			if (!this.zxcvbnResult) {
				this.addError("password", "You must enter a password.")
			}

			if (this.zxcvbnResult.score < 3) {
				this.addError("password", "This password must be stonger.")

				if (this.zxcvbnResult.feedback.warning) {
					this.addError("password_warning", this.zxcvbnResult.feedback.warning)
				}
			}

			if (check.isEmail(this.value)) {
				this.currentStrength = 0;
				this.addError("password_warning", "This password is an email.")
			}
		}
	}

	checkMatches() {
		if (check.isIn("match", this.methods) && this.value) {
			// @ts-ignore
			if (this.element.__match.value !== this.element.value) {
				this.addError("password_match_warning", "These passwords don't match")
			}
		}
	}

	checkCurrency() {
		if(check.isIn("currency", this.methods) && this.value) {
			const result = check.isCurrency(this.value, {allow_negatives: false})

			if (!result) {
				this.addError("currency", "Please enter a valid currency value.")
			}
		}
	}

	async checkRadioChecked() {
		if (this.element.type === "radio") {
			const options = await this.element.option_elements() as NodeListOf<HTMLMidwestItemElement>;
			const checked: any[] = [];

			options.forEach((option) => {
				if (option.checked) checked.push(option);
			});

			if (checked.length <= 0) {
				this.addError("radio", "This field is required.");
			}
		}
	}
}

export const getParents = function (elem, selector) {

	// Element.matches() polyfill
	if (!Element.prototype.matches) {
		// @ts-ignore
		Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(s) {
				// @ts-ignore
				// tslint:disable-next-line: one-variable-per-declaration
				const matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length;
				// @ts-ignore
				// tslint:disable-next-line: no-empty
				while (--i >= 0 && matches.item(i) !== this) {}
				return i > -1;
			};
	}

	// Set up a parent array
	const parents = [];

	// Push each parent element to the array
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if (selector) {
			if (elem?.matches && elem?.matches(selector)) {
				parents.push(elem);
			}
			continue;
		}
		parents.push(elem);
	}

	// Return our parent array
	return parents;

};
