import React from "react";
import Room from "./Room";
import Container from "react-bootstrap/Container";

export default class RoomList extends React.Component {
  render() {
    const roomList = this.props.rooms.map((room, idx) => {
      return (
        <Room
          roomInfo={room}
          onAddToCart={this.props.onAddToCart}
          idx={idx}
          key={idx}
          buttonText="Add To Cart"
        />
      );
    });

    return <Container>{roomList}</Container>;
  }
}
