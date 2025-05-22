import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import useAuthentication from '../hooks/useAuthentication'

export const Authentication = () => {
  const data = useFetch('/status.json')

  useEffect(() => {
    if (data && data.status === 'success' && data.data) {
      const { name, enquiryId } = data.data
      localStorage.setItem('name', name)
      localStorage.setItem('enquiryId', enquiryId)
      console.log('Data stored in localStorage')
    }
  }, [data])
  const isAuth = useAuthentication('Gokul', '123456')
  return (
    <div>
      {isAuth ? (
        <h2>Welcome, Gokul!</h2>
      ) : (
        <h2> Not authenticated</h2>
      )}
    </div>
  )
}
