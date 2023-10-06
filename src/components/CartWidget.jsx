import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'




const CartWidget = () => {
    return (
      <div className="cart-widget">
        <i className="fa fa-shopping-cart"></i>
        <FontAwesomeIcon icon={faCartShopping}/>
        <span className="cart-notification">5</span>
        
      </div>
    );
  }
  
  export default CartWidget;