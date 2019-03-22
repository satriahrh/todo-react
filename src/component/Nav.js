import React from 'react';
import {Link} from "react-router-dom";

const API = 'http://localhost:3030/projects/';

const NavLink = (props) => {
  return <Link
    className='nav-link'
    style={{padding: '5px'}}
    to={props.to}
  >
    {props.children}
  </Link>
};

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ projects: data }));
  }

  render() {
    const {projects} = this.state;

    return (
      <nav className="nav" style={{width: '100vw'}}>
        <NavLink to='/'>
          Home
        </NavLink>
        {
          projects.map((project) =>
            <NavLink
              key={project.id}
              to={'/p/' + project.id}
            >
              {project.title}
            </NavLink>
          )
        }
      </nav>
    );
  }
}

export default Nav;
