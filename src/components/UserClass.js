import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    const { name, dis, email } = this.props;
    return (
      <div className="user-card">
        <h1>Name:{name}</h1>
        <h2>Discription:{dis}</h2>
        <h3>Contact:{email}</h3>
      </div>
    );
  }
}

export default UserClass;
