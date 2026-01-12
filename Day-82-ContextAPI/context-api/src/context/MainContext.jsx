import React, { createContext } from 'react'

export const ProductsContext =createContext()

const MainContext = ({children}) => {
  return (


    <div>
        <ProductsContext.Provider>
            {children}
        </ProductsContext.Provider>
</div>
  )
}

export default MainContext