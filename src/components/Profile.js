import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    // console.log("constructor profile");
  }

  async componentDidMount() {
    // console.log("componentDidMount Profile");
    const data = await fetch("https://api.github.com/users/paritosh-18");
    const json = await data.json();
    // console.log(json);
    this.setState({
      user: json,
    });
  }

  render() {
    // console.log("render profile");
    return (
      <div className="m-2 p-2 bg-slate-100 w-72 rounded-sm shadow-md">
        <img src={this.state.user?.avatar_url} className="m-1 p-1 rounded-full shadow-xl" />
        <h4>Name: {this.state.user?.name}</h4>
        <h4>
          Github Link:{" "}
          <a href={this.state.user?.html_url} target="_blank">
            Link
          </a>
        </h4>
      </div>
    );
  }
}

export default Profile;
