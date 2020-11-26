import React from "react";

// 항상 기억 React는 자동적으로 class component 의 render method를 자동으로 실행한다.
class App extends React.Component {
  // constructor() {
  //   console.log("hello");
  // }

  // React component는 render method를 가지고 있지만, extends from 을 했으니까 render method가 있다.
  state = {
    // state는 object이고 component의 data를 넣을 공간이 있고 이 데이터는 변한다.
    count: 0
  };


  add = () => {
    console.log("add");
    this.setState(current => ({ count: this.state.count + 1 }));
  };

  minus = () => {
    console.log("minus");
    this.setState(current => ({ count: this.state.count - 1 }));
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  componentWillUnmount(){
    console.log("Goodbye, cruel world");
  }

  // <button onClick={this.add}> Add </button> 
  // this.add() 하면 즉시 나타나는 것이고 this.add를 해야 클릭을 하였을 때에만 되는 것이다.
  render() {
    console.log("I am rendering");
    return (
      <div>
        <h1>The number is: {this.state.count} </h1>
        <button onClick={this.add}> Add </button>
        <button onClick={this.minus}> Minus </button>
      </div>
    );
  }
}

export default App;
