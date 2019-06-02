import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';

class LastCommits extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const length = this.props.location.state.commits_url.indexOf("{");
    const commits_url = this.props.location.state.commits_url.substring(0, length);

    fetch(commits_url)
      .then(response => response.json())
      .then(
        commits => {
          this.setState({
            commits: commits
          });
        }
      );
  }

  renderCommits(commit) {
    return (
      <CollectionItem key={commit.sha}>
        <p className="commit-message">{commit.commit.message}</p>
        <p className="commit-author">committed by {commit.commit.author.name}</p>
      </CollectionItem>
    );
  }

  render() {
    if (!this.state.commits) {
      return (<div className="user-page">LOADING COMMITS...</div>);
    }

    const commits = this.state.commits.slice(0, 10);

    return (
      <Collection header="Last Commits">
        {commits.map(this.renderCommits)}
      </Collection>
    );
  }
  
};

export default LastCommits;
