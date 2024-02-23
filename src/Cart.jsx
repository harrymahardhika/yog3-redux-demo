import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state.cart)

  return (
    <div className="cart">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="total">{totalAmount.toFixed(2)}</div>
    </div>
  )
}

export default Cart
