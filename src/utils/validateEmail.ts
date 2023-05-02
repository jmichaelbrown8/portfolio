export const validateEmail = (input: string) => {
  return input.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i);
};
