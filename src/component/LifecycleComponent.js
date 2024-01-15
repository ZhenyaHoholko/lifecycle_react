import { Component } from "react";
class LifecycleComponent extends Component {
  state = {
    count: 0,
  };
  componentDidMount() {
    console.log("componentDidMount");
    let url = "https://todo-redev.herokuapp.com/api-docs/";
    let response = fetch(url)
      .then(console.log("error1"))
      .catch(console.log("error2"));
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        {count}
        <button onClick={() => this.setState({ count: count + 1 })}>+</button>
      </div>
    );
  }
}
export default LifecycleComponent;
