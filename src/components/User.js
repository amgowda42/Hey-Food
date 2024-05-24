const User = (props) => {
    const {name , dis , email} = props;
    console.log(props); 

    return (
        <div className="user-card">
            <h1>Name:{name}</h1>
            <h2>Discription:{dis}</h2>
            <h3>Contact:{email}</h3>
        </div>
    )
};

export default User;