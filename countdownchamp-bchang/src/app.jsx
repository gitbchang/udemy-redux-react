import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  // formPreventDefault = e => {
  //   e.preventDefault();
  // }

  changeDeadline = () => {
    this.setState({deadline: this.state.newDeadline});
    this.refs.dateSubmit.value='';
    
  }

  render() {
    return (
      <div className='App'>
        <div className='App-title'>Countdown to {this.state.deadline}</div>
        <Clock 
          deadline={this.state.deadline}
        />
        <Form onSubmit={e => e.preventDefault()} inline={true}>
          <FormControl
            className='Deadline-input'
            ref='dateSubmit'
            placeholder='new date'
            onChange={event => { this.setState({ newDeadline: event.target.value }); } }/>
          <Button onClick={this.changeDeadline}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;