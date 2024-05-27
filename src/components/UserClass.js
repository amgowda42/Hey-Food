import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserInfo: {
        img : "Anthar url",
        name: "Dammy",
        location: "Dummy",
        email: "dummy@gmail.com",
        followers: "0",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/amgowda42");
    const json = await data.json();
    console.log(json);
    this.setState({UserInfo: json });
  }

  render() {
    return (
      <div className="user-card">
        <img src={this.state.UserInfo.avatar_url} alt="" />
        <h1>Name:{this.state.UserInfo.name}</h1>
        <h2>Location:{this.state.UserInfo.location}</h2>
        <h3>Email:{this.state.UserInfo.email}</h3>
        <h3>Followers:{this.state.UserInfo.followers}</h3>
      </div>
    );
  }
}

export default UserClass;
