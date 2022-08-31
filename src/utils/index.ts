
/**
 * To validate email
 * @param email email string to validate
 * @returns  return true or false
 */
export const validateEmail = (email: string) => {
    return /[a-z0-9]+@[a-z]{2,}\.[a-z]{2,3}/.test(email);
  };
  
/**
 * To validate phone
 * @param phone  phone string to validate
 * @returns return true or false
 */
export const validatePhone = (phone:string)=>{
   return  (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/).test(phone);
}

/**
 * To validate password is strong or not
 * @param password password string to validate
 * @returns return true or false
 */
export const validatePassword = (password: string) => {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
  };