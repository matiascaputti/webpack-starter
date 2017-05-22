import React from "react";
import image1 from '../assets/images/8420490.png';
import image2 from '../assets/images/166921.jpeg';
import Font from '../assets/fonts/Billabong-Regular.ttf';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
      this.increment.bind(this),
      1000
    )
  }

  increment() {
    this.setState(({ counter }) => {
      return {counter: counter + 1};
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { counter } = this.state;

    return (
      <header>
        <h1 style={{color: 'red'}}>
          React + Webpack starter
        </h1>
        
        <h3>{counter}</h3>

        <img src={image1} />
        <img src={image2} />

        <p className="big">testing my styles</p>
      </header>
    );
  }
}

export default App;
