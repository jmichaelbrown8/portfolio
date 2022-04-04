function validateEmail(input) {
  return input.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i);
}

export default validateEmail;
