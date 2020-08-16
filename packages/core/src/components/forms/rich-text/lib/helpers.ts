export const validateMentionsData = (mentionsData) => {
  const raw: { id: string, value: string }[] | string = mentionsData;
  const mentions: { id: string, value: string }[] = typeof raw === "string" ? JSON.parse(raw) : raw;

  const passes = mentions.every((mention) => { return "id" in mention && "value" in mention; });

  if (!passes) {
    const message = "Mention objects need to have an id and a value both set. The id is the user to be tagged, the value is their name."
    throw new Error(message);
  }

  return mentions;
}

export const validateHasValue = (value) => {
  const _value = value;
  let test = true;
  const message = "This field is required."

  if (typeof _value === "string") {
    if (_value === "") {
      test = false;
    } else {
      try {
        let __value = JSON.parse(_value);
        if (__value.text === "") {
          test = false;
        }
      } catch (error) {
        test = false;
      }
    }
  } else if (typeof _value === "undefined") {
    test = false;
  }
  
  return {
    test,
    message
  }
}