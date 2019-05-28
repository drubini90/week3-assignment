import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default class Room extends React.Component {
  render() {
    const { roomInfo, onAddToCart, idx, buttonText } = this.props;

    return (
      // <li>
      //   <span>Room : {roomInfo.title}</span>
      //   <span>Cost : {roomInfo.payment.cost}</span>
      //   <button onClick={() => onAddToCart(roomInfo, idx)}>{buttonText}</button>
      // </li>

      <Row>
        <Col>
          <Image src={roomInfo.image} rounded width="150" height="100" alt="" />
        </Col>
        <Col>
          <h3>{roomInfo.title}</h3>
          <div>{roomInfo.houseType}</div>
          <div>Price : {roomInfo.payment.cost}</div>
        </Col>
        <Col>
          <button onClick={() => onAddToCart(roomInfo, idx)}>
            {buttonText}
          </button>
        </Col>
      </Row>
    );
  }
}
