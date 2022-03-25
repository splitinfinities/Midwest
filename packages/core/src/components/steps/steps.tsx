import { Component, Prop, State, Element, Method, h, Host } from '@stencil/core';

@Component({
  tag: 'midwest-steps',
  styleUrl: 'steps.css',
  shadow: true,
})
export class Steps {
  @Element() element: HTMLElement;

  @Prop({ mutable: true, reflect: true }) name: string;
  @Prop() validate: boolean;

  @State() stepsList: HTMLMidwestStepElement[];
  @State() contentsList: HTMLMidwestContentElement[];
  @State() currentStep: HTMLMidwestStepElement;

  advanceButtons: NodeListOf<HTMLMidwestButtonElement>;
  backButtons: NodeListOf<HTMLMidwestButtonElement>;

  async componentWillLoad() {
    await this.prepare();
  }

  async prepare() {
    const steps = await this.steps();
    const stepCount = steps.length;

    this.advanceButtons = document.querySelectorAll(`midwest-button[for="${this.name}:forward"]`);
    this.backButtons = document.querySelectorAll(`midwest-button[for="${this.name}:back"]`);

    if (this.advanceButtons) {
      this.advanceButtons.forEach(button => {
        button.addEventListener('click', this.advance.bind(this));
        button.addEventListener('keydown', (e: KeyboardEvent) => {
          if (e.key === 'Enter') {
            this.advance();
          }
        });
      });
    }

    if (this.backButtons) {
      this.backButtons.forEach(button => {
        button.addEventListener('click', this.back.bind(this));
        button.addEventListener('keydown', (e: KeyboardEvent) => {
          if (e.key === 'Enter') {
            this.back();
          }
        });
      });
    }

    steps.forEach((step, index) => {
      step.order = index + 1;
      step.tabCount = stepCount;
      step.validate = this.validate;

      if (step.open) {
        this.currentStep = step;
      }
    });
  }

  async advance() {
    const nextStep = this.currentStep.nextElementSibling as HTMLMidwestStepElement;
    const valid = await this.currentStep.isValid();

    if (valid) {
      nextStep.activate();
      this.currentStep.open = false;
      this.currentStep.current = false;
      this.currentStep.complete = true;
      this.currentStep = nextStep;
      this.currentStep.current = true;
      this.currentStep.open = true;
    } else {
      this.currentStep.showValidation();
    }
  }

  back() {
    const previousStep = this.currentStep.previousElementSibling as HTMLMidwestStepElement;
    previousStep.activate();
    this.currentStep = previousStep;
  }

  @Method()
  async steps() {
    if (!this.stepsList || this.stepsList.length === 0) {
      this.stepsList = Array.from(this.element.querySelectorAll('midwest-step'));
    }

    return this.stepsList;
  }

  @Method()
  async contents() {
    this.contentsList = Array.from(document.querySelectorAll(`midwest-content[for='${this.name}']`));
    return this.contentsList;
  }

  @Method()
  async switch(step: HTMLMidwestStepElement) {
    const steps = await this.steps();
    const contents = await this.contents();
    const valid = await this.currentStep.isValid();

    if (valid || step.complete) {
      this.currentStep.complete = true;
      steps.forEach(s => {
        const content = contents.filter(c => c.id === s.href)[0];
        s.open = s.order === step.order;
        s.current = s.order === step.order;

        if (content) {
          content.open = s.open;
        }
      });

      this.currentStep.disabled = false;
      this.currentStep = step;
    }
  }

  render() {
    return (
      <Host>
        <div class="step-list" role="tablist">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
