import { Component } from "react";
class LifecycleComponent extends Component {
  state = {
    count: 0,
  };
  componentDidMount() {
    console.log("componentDidMount");
    let url = "https://todo-redev.herokuapp.com/api/todos?isCompleted=true";
    let response = fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.log("error2"));
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.count);
    if (nextState.count % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.count);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        {count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}
export default LifecycleComponent;
