/**
 * To get token value from the storage
 * @returns return token
 */
export const getAccessToken = ()=>{
    return localStorage.getItem('token')
}

/**
 * To set token value in the storage
 * @param token token value to store
 */
export const setAccessToken = (token:string)=>{
  localStorage.setItem('token',token)
}
