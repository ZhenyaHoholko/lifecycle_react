import { Component } from "react";
class LifecycleComponent extends Component {
  state = {
    count: 0,
  };
  componentDidMount() {
    console.log("componentDidMount");
    let url = "https://todo-redev.herokuapp.com/api/auth/login";
    let getResourse = async () => {
      await fetch(url, {
        headers: {
          "content-type": "application/json",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZsYWQ4QG1haWwucnUiLCJpZCI6MjkyLCJpYXQiOjE3MDU1MjM0ODJ9.n6eokA4Ma5wWiM0zSwzzr33gkqYzN5Vnf3xec-mF3q8",
        },
        method: "POST",
        body: JSON.stringify({
          email: "vlad8@mail.ru",
          password: "Hello_34",
        }),
      })
        .then((res) => console.log(res))
        .then((data) => console.log(data))
        .catch(console.log("error2"));
    };
    getResourse();
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
        <p>Вы нажали {count} раз</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}
export default LifecycleComponent;
