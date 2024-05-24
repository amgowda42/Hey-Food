import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <User name="Annappa Gowda"
      dis="front end developer"
      email= "amg@1234gowda" />
      <UserClass
        name="Annappa Gowda (Class based component)"
        dis="Front end developer"
        email="amg@123"
      />
    </div>
  );
};

export default About;
