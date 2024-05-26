import { useState } from "react";

const User = (props) => {
    const {name , dis , email} = props;
    console.log(props);
    const[count , setCount] = useState(0)

    return (
        <div className="user-card">
            <h1>count:{count}</h1><button onClick={()=>{
                setCount(count+1);
            }}>+</button>
            <h1>Name:{name}</h1>
            <h2>Discription:{dis}</h2>
            <h3>Contact:{email}</h3>
        </div>
    )
};

export default User;