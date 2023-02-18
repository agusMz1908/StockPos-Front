import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className="text-center my-4 bg-red-200 font-bold p-3 uppercase text-red-600 border-l-red-600 border-l-[12px]">
        {children}
    </div>
  )
}

export default Alerta