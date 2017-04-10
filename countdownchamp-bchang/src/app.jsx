import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: '',
      stopwatchTimer: '',
      newStopwatchTimer: ''
    }
  }

  changeDeadline = () => {
    this.setState({deadline: this.state.newDeadline});
    this.refs.dateSubmit.value='';    
  }

  changeStopwatch = () => {
    this.setState({stopwatchTimer: this.state.newStopwatchTimer });
  }

  render() {
    return (
      <div className='App'>
        <div className='App-title'>Countdown to {this.state.deadline}</div>
        <Clock 
          deadline={this.state.deadline}
        />
        <Stopwatch 
          timer={this.state.stopwatchTimer}
        />
        <Form onSubmit={e => e.preventDefault()} inline={true}>
          <FormControl
            className='Deadline-input'
            ref='dateSubmit'
            placeholder='New Date'
            onChange={event => { this.setState({ newDeadline: event.target.value }); } }/>
          <Button onClick={this.changeDeadline}>Submit</Button>
          <br/>
          <FormControl
            className='Deadline-input'
            ref='stopwatchSubmit'
            placeholder='New Timer'
            onChange={event => {this.setState({ newStopwatchTimer: event.target.value}); } } />
          <Button onClick={this.changeStopwatch} >Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;