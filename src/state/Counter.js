import React from 'react';

class Counter extends React.Component {
    static defaultProps = {
        steps: 1
    }
    constructor(props) {
        console.log('props in contructor', props)
        super(props)
        let start = props.count;
        this.state = {
            count: start
        }
    }
    handleAddMore = () => {
        this.setState({
            count: this.state.count + this.props.steps
        })
    }
    handleButtonClick = () => {
        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)

        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
      return (
        <div>
          <p>The current count: {this.state.count}</p>
          <button onClick={() => this.handleButtonClick()}>
            Add 1
          </button>
          <button onClick={() => this.handleAddMore()}>Add {this.props.steps}</button>
        </div>
      )
    }
  }

  export default Counter;