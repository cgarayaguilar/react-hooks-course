import React, { useContext } from 'react'
import '../styles/components/Payment.css'
import { AppContext } from '../context/AppProvider'
import { PaypalButton } from 'react-paypal-button'
import { useHistory } from 'react-router-dom'

const Payment = () => {
  const { state } = useContext(AppContext)
  const { cart, buyer, addNewOrder } = state
  const history = useHistory()

  const handlePaymentSuccess = data => {
    console.log(data)
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      }

      addNewOrder(newOrder)
      history.pushState('/checkout/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price

    const sum = cart.reduce(reducer, 0)

    return sum
  }

  const paypalOptions = {
    clientId: '',
    intent: 'capture',
    currency: 'USD',
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map(item => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PaypalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
    </div>
  )
}
export default Payment
