export const validateEmail = (email: string): boolean => {
  return email.includes('@') && email.includes('.');
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export const validateFullName = (fullName: string): boolean => {
  return fullName.length >= 2;
};