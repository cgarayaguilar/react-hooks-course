import React, { useContext } from 'react'
import '../styles/components/Success.css'
import { AppContext } from '../context/AppProvider'

const Success = () => {
  const { state } = useContext(AppContext)
  const { buyer } = state

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name} Gracias por tu compra`}, </h2>
        <span>Tu pedido llegara en 3 dias a tu ubicacion</span>
        <div className="Success-map">Google maps</div>
      </div>
    </div>
  )
}

export default Success
