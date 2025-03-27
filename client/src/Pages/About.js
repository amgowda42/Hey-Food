import UserClass from "../components/UserClass";
import { Component, Consumer } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div>
          loggedIN User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-lg text-orange-500">
                {loggedInUser}
              </h1>
            )}
          </UserContext.Consumer>
        </div>
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
