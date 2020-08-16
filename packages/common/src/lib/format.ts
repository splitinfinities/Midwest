export const format = ([string, ...options]) => {
  let formatted = string;
  
  options.forEach((option, index) => {
    formatted = formatted.replace("{" + index + "}", option);
  }) 

  return formatted;
}