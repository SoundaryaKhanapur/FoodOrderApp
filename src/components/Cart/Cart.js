import Styles from './Cart.module.css';

const Cart = props => {
    const cartItems = <ul className={Styles['cart-items']}>{[
        {id: 'c1', name: 'Croissant', amount: 2, price: 22.99}]
        .map(item => <li>{item.name}</li>)}
    </ul>
    return <div>
        {cartItems}
        <div className={Styles.total}>
            <span>Total Amount</span>
            <span>35.68</span>
        </div>
        <div className={Styles.actions}>
            <button className={Styles['button--alt']}>Close</button>
            <button className={Styles.button}>Order</button>
        </div>
    </div>
};

export default Cart;