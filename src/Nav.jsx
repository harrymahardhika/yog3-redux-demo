import { useSelector } from 'react-redux'

const Nav = () => {
  const { totalItems } = useSelector((state) => state.cart)

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-container">
          <h3>Yoo</h3>
        </div>
        <div className="nav-container">
          <div className="amount-container">{totalItems}</div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
