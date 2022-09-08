/**
 * To validate email
 * @param email email string to validate
 * @returns  return true or false
 */
export const validateEmail = (email: string) => /[a-z0-9]+@[a-z]{2,}\.[a-z]{2,3}/.test(email);

/**
 * To validate phone
 * @param phone  phone string to validate
 * @returns return true or false
 */
export const validatePhone = (phone:string) => (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/).test(phone);

/**
 * To validate password is strong or not
 * @param password password string to validate
 * @returns return true or false
 */
export const validatePassword = (password: string) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);


// Not used just here to show that functions that are used to perform calculations are placed in utils

export const formatDollars = (dollar :number) => {
  let dollars;
  dollars = (Math.round(dollar * 100) / 100).toFixed(2);
  dollars = dollar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return dollars;
}