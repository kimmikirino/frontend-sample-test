import React from 'react';
import { Link } from 'react-router';

class Repo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch(this.props.repos_url)
      .then(response => response.json())
      .then(
        repo => {
          this.setState({
            repo: repo
          });
        }
      );
  }

  renderRepo(repo) {
    return (
      <Link className="collection-item" key={repo.name}>{repo.name}</Link>
    );
  }

  render() {
    if (!this.state.repo) {
      return (<div className="user-page">LOADING REPOSITORIES...</div>);
    }

    const repo = this.state.repo;

    return (
      <div className="collection">
        {repo.map(this.renderRepo)}
      </div>
    );
  }
};

export default Repo;
