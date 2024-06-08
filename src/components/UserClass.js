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
    // console.log(json);
    this.setState({UserInfo: json });
  }

  render() {
    const {name , location, followers, avatar_url, email} = this.state.UserInfo;
    return (
      <div className="user-card">
        <img style={{width:"100px"}} src={avatar_url} alt="" />
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>
        <h3>Email:{email}</h3>
        <h3>Followers:{followers}</h3>
      </div>
    );
  }
}

export default UserClass;
