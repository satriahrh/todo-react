import React from 'react';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTask({
      task: this.state.value
    });
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='new task'/>
        <input type="submit" value="Add"/>
      </form>
    );
  }
}


export default NewTask;
