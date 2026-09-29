import { Component } from "react";
class Car extends Component {
constructor(props) {
  super(props);
  this.state = {
    color: "red",
    brand: "Toyota",
    model: "fortuner",
    year: 2020
  };
}
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  previousColor = () => {
    this.setState({ color: "red" });
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button onClick={this.changeColor}>Change color</button><><br /></>
        <button onClick={this.previousColor}>Previous color</button>
      </div>
    );
  }
}
export default Car;