import "./CartItem.css";
import {Link} from 'react-router-dom';

const CartItem = () => {
    return <div className="cartitem">
        <div className="cartitem__image"> 
            <img src= "https://cdn.shopify.com/s/files/1/0279/3773/4717/products/Cheesecake_and_Pearl_Milk_Tea_1024x1024.png?v=1589714658" alt="cheesecake and pearl milk tea"/>
        </div>

        <Link to={`/product/${111}`} className="cartitem__name">
            <p> Cheescake and Pearl Milk tea</p>
        </Link>

        <p className="cartitem__price">140.00</p>

        <select className="cartitem__select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>

        <button className="cartitem__deleteBtn">
            <i className="fas fa-trash"></i>
        </button>
    </div>;
};

export default CartItem;