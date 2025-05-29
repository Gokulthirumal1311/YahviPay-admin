import { useState, useEffect } from 'react'

function useAuthentication(expectedName, expectedEnquiryId) {
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    const storedName = localStorage.getItem('name')
    const storedEnquiryId = localStorage.getItem('enquiryId')
    if (storedName === expectedName && storedEnquiryId === expectedEnquiryId) {
      setIsAuth(true)
      console.log('Authenticated:', storedName, storedEnquiryId)
    } else {
      setIsAuth(false)
      console.log('Authentication failed')
    }
  }, [expectedName, expectedEnquiryId])
  return isAuth
}
export default useAuthentication
