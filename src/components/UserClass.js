import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2:2,
      count3:3
    };

    console.log(props);
  }

  render() {
    const { name, dis, email } = this.props;
    const { count,count2 } = this.state;
    return (
      <div className="user-card">
        <h1>count : {count}</h1>
        <h2>count2:{count2}</h2>
        <button onClick={() =>{
          this.setState({ count:this.state.count+1,
          count2:this.state.count2+1
          });
        }}> Incriment</button>
        <h1>Name:{name}</h1>
        <h2>Discription:{dis}</h2>
        <h3>Contact:{email}</h3>
      </div>
    );
  }
}

export default UserClass;
