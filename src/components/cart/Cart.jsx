import React from 'react'

function ShoppingCArt() {
    const [cartItems, setCartItems] = useState([]);
}

function addToCart(item) {
    setCartItems([...cartItems, item]);
}

function handleSubmit(event) {
    event.preventDefault();
    const itemName = event.target.elements.itemName.value;
    const itemPrice = event.target.elements.itemPrice.value;
    const newItem = { name: itemName, price: itemPrice };
    addToCart(newItem);
    event.target.reset();
}

const Cart = () => {

    return (
        <div>
            <h1>Shopping Cart</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Item name:
                    <input type="text" name="itemName" />
                </label>
                <label>
                    Item price:
                    <input type="text" name="itemPrice" />
                </label>
                <button type="submit">Add to cart</button>
            </form>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price}</li>
                ))}
            </ul>

            <ul>{cartItems.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li>
            ))}</ul>
        </div>

    )


}


export default Cart
