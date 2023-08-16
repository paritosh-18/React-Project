import { Component } from "react";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfile: false,
    };

    console.log("constructor About");
  }

  componentDidMount() {
    console.log("componentDidMount About");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate About");
  }

  render() {
    console.log("render About");
    return (
      <>
        <h1>This is the about us page</h1>
        <button
          onClick={() =>
            this.state.showProfile
              ? this.setState({
                  showProfile: false,
                })
              : this.setState({
                  showProfile: true,
                })
          }
        >
          {this.state.showProfile ? "Hide" : "Show"}
        </button>
        <div>{this.state.showProfile ? <Profile /> : <div></div>}</div>
        {/* <Outlet /> */}
      </>
    );
  }
}

export default About;
