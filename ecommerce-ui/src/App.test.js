import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow, render, mount } from "enzyme";
import { wrap } from "module";
import Room from "./Components/Room";
import RoomList from "./Components/RoomList";
import ShoppingCart from "./Components/ShoppingCart";
import testData from "./_data/airbnbs.json";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("shallow reders App", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
it("component : Room - has defined props : roomInfo", () => {
  const room = testData[0];
  const idx = 1;
  const wrapper = shallow(
    <Room
      roomInfo={room}
      onAddToCart={() => {}}
      idx={idx}
      key={idx}
      buttonText="Add To Cart"
    />
  );
  expect(wrapper.props("roomInfo")).toBeDefined();
});
it("Compoenent : RoomList - Renders", () => {
  const wrapper = render(<RoomList rooms={testData} onAddToCart={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});
it("Component :  ShoppingCart - shallow test", () => {
  const wrapper = shallow(
    <ShoppingCart rooms={testData} onRemoveFromCart={() => {}} totalCost="" />
  );
  expect(wrapper).toMatchSnapshot();
});
