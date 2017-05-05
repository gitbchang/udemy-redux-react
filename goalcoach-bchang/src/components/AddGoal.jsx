import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal() {
    console.log('this.state', this.state);
    const { title } = this.state;
    const { email } = this.props;
    goalRef.push({email, title});
  }

  render() {
    return (
      <div className='form-inline' >
        <div className='form-group'>
          <input 
            type='text'
            placeholder='Add a Goal'
            className='form-control'
            style={{marginRight: '5px'}}
            onChange={event => this.setState({title: event.target.value})}
          />
          <button
            type='button'
            className='btn btn-success'
            onClick={() => this.addGoal()}
          >
            Add Goal
          </button>
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { email } = state;
  return {
    email
  }
}

export default connect(mapStateToProps, null)(AddGoal);