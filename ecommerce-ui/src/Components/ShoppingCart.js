import React from "react";

class ShoppingCart extends React.Component {
  render() {
    const { rooms, totalCost } = this.props;
    const roomList = rooms.map((roomInfo, idx) => {
      return (
        <li key={idx}>
          <span>Room : {roomInfo.title}</span>
          <span>Cost : {roomInfo.payment.cost}</span>
          <button onClick={() => this.props.onRemoveFromCart(roomInfo, idx)}>
            Delete
          </button>
        </li>
      );
    });

    return (
      <div>
        <h2>Shopping Cart</h2>
        <ul>{roomList}</ul>
        <h3>Total Cost : {totalCost}</h3>
      </div>
    );
  }
}

export default ShoppingCart;
