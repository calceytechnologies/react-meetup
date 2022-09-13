const validate = (value, rules) => {
  let error = '';
  
  // Iterate through each validation rule and check if valid
  for (let rule in rules) {
    if (rule === 'isRequired' && value.trim() === '') {
      error = 'This is a required field.';
    } else if (rule === 'minLength' && value.length < rules[rule]) {
      error = `Your name has to include a minimum of ${rules[rule]} characters.`;
    } else if (rule === 'isEmail' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'This email address is invalid.';
    }
  }
  
  return error;
}

export default validate;