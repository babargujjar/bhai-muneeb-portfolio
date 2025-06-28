import React, { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {


  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    setIsFirstLoad(false)
  }, [])

  return (
    <GlobalContext.Provider value={{ isFirstLoad }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
