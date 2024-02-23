import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { decreaseQty, increaseQty, removeItem } from './stores/cartSlice'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <div className="cart-item">
      <img src={item.img} />
      <div>
        <h4>{item.title}</h4>
        <div className="item-price">{item.price}</div>
        <button className="remove-btn" onClick={() => dispatch(removeItem(item))}>
          Remove
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decreaseQty(item))} className="amount-btn">
          -
        </button>
        {item.amount}
        <button onClick={() => dispatch(increaseQty(item))} className="amount-btn">
          +
        </button>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem
