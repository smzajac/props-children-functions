import React, { Component } from 'react';
import '../styles/App.css';


class Header extends Component {
  render() {
    return (
      <nav>I am the Navigation Bar</nav>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>I am the Footer</footer>
    );
  }
}

class BaseLayout extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

class ParentComponent extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    //we are really in a *bind* here.... :)
    //fix it...

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    this.setState({whatToSay: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: '', whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state

  }
  render() {
    return (
      <div>
        <div>
          <input value ={this.state.whatToSay} onChange={this.handleInput} type="text" placeholder="Say It, Don't Spray It!" />
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit}/>
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
        </div>
      </div>
    );
  }
}

class ChildComponent extends Component {

  render() {
    return (
      <div>Dumb Component receiving Props
        <div>
          <input value="click me" type="submit" onClick={this.props.onClick}/>

        </div>
      </div>
    );
  }
}

class DisplayComponent extends Component {
  render() {
    return (
      <div>{this.props.sayWhat}</div>
    );
  }
}


class App extends Component {

  render() {
    return (
      <div className="App">
        <BaseLayout>
        <ParentComponent />
        </BaseLayout>
      </div>
    );
  }
}

export default App;
