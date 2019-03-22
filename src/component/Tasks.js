import React from 'react';
import PropTypes from "prop-types";
import NewTask from "./NewTask";

let API = (id, type) => 'http://localhost:3030/projects/' + id + '/' + type;

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: Array(5).fill({task: '. . .'}),
    };

    this.addTask = this.addTask.bind(this);
  }

  async loadTasks() {
    fetch(API(this.props.id, this.props.type))
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({
        tasks: data,
      }));
  }

  addTask(task) {
    this.setState(prevState => ({
      tasks: [...prevState.tasks,  task]
    }));

    fetch('http://localhost:3030/' + this.props.type, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        'projectId': this.props.id,
        'task': task.task,
      }
    });
  }

  componentDidMount() {
    this.loadTasks();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.loadTasks()
    }
  }

  render() {
    const taskList = this.state.tasks.map(
      (task, index) => <li key={index}>{task.task}</li>
    );

    return (
      <div className="task">
        <h2>{this.props.title}</h2>
        <ul>
          {taskList}
          <li><NewTask addTask={this.addTask}/></li>
        </ul>
      </div>
    );
  }
}

Tasks.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.array,
};

export default Tasks;
