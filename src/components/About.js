import { Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    render(){
        return(
            <div>
            <h1>About Class Component</h1>
            <h2>This is Namaste React Web Series</h2>
            {/* <User name={"Avin Dsouza {function}"} /> */}
            <UserClass name={"Avin Dsouza (Class based component)"} location={"Navi Mumbai"}/>
        </div>
        );
    }
}



export default About;