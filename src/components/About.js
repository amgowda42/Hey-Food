
import UserClass from "./UserClass";
import {  Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor")
  }
  componentDidMount(){
    console.log("Parent component did mount");
  }
  render() {
    console.log("parent render");
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
