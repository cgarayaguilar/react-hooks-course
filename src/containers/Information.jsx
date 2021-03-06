import React, { useRef, useContext } from 'react'
import '../styles/components/Information.css'
import { Link, useHistory } from 'react-router-dom'
import { AppContext } from '../context/AppProvider'

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext)
  const form = useRef(null)

  const { cart } = state
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    }

    addToBuyer(buyer)

    history.push('/checkout/payment')
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto</h2>
        </div>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="Information-form">
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="email" placeholder="Correo electronico" name="apto" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="tel" placeholder="Telefono" name="phone" />
          </div>
          <div className="Information-buttons">
            <div className="Information-back">
              <Link to="/checkout">Regresar</Link>
            </div>
            <div className="Information-next">
              <button type="submit">Pagar</button>
            </div>
          </div>
        </form>
      </div>

      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(item => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Information
