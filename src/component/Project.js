import React from 'react';
import Tasks from './Tasks.js';

const API = 'http://localhost:3030/projects/';

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '. . .',
    };
  }

  async loadTitle() {
    fetch(API + this.props.match.params.id)
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({
        title: data.title,
      }));
  }

  componentDidMount() {
    this.loadTitle();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.loadTitle()
    }
  }

  render() {
    return (
      <div className="project">
        <h1>{this.state.title}</h1>
        <Tasks title="Todo" id={this.props.match.params.id} type='todo'/>
        <Tasks title="Done" id={this.props.match.params.id} type='done'/>
        <Tasks title="Block" id={this.props.match.params.id} type='block'/>
      </div>
    );
  }
}

export default Project;
