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
        <h1 className="font-bold">This is the about us page</h1>
        <button
          className="bg-slate-200 hover:bg-purple-300 m-2 p-2 rounded-xl"
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
