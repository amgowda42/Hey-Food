import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <UserClass
          name="Annappa Gowda (Class based component)"
          dis="Front end developer"
          email="amg@123"
        />
      </div>
    );
  }
}

export default About;
