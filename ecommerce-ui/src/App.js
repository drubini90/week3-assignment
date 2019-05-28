import React from "react";
import "./App.css";
import ShoppingCart from "./Components/ShoppingCart";
import RoomList from "./Components/RoomList";
import airbnbsData from "./_data/airbnbs.json";

class App extends React.Component {
  state = {
    rooms: airbnbsData,
    selectedRooms: [],
    totalCost: 0
  };

  onAddToCart = (roomInfo, idx) => {
    const selectedRoom = this.state.rooms[idx];
    if (this.state.selectedRooms.includes(selectedRoom)) {
      alert("You already selected that room.");
      return;
    }

    this.setState(prevState => {
      return {
        selectedRooms: [...prevState.selectedRooms, selectedRoom],
        totalCost: prevState.totalCost + roomInfo.payment.cost
      };
    });
  };

  onRemoveFromCart = (roomInfo, idx) => {
    this.setState(prevState => {
      const selectedRooms = [...prevState.selectedRooms];
      selectedRooms.splice(idx, 1);

      return {
        selectedRooms,
        totalCost: prevState.totalCost - roomInfo.payment.cost
      };
    });
  };

  render() {
    return (
      <div className="App">
        <ShoppingCart
          rooms={this.state.selectedRooms}
          onRemoveFromCart={this.onRemoveFromCart}
          totalCost={this.state.totalCost}
        />
        <hr />
        <RoomList rooms={this.state.rooms} onAddToCart={this.onAddToCart} />
      </div>
    );
  }
}

export default App;
