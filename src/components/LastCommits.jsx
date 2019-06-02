import React from 'react';
import { Collection, CollectionItem, TextInput } from 'react-materialize';

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
            initialItems: commits.slice(0, 10),
            commits: commits.slice(0, 10),
          });
        }
      );
  }

  filterList = (event) => {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function (item) {
      return item.commit.message.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ commits: updatedList });
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

    const commits = this.state.commits;

    return (
      <div className="commits-page">
        <TextInput placeholder="Search" icon="search" onChange={this.filterList}/>
        <Collection header="Last Commits">
          {commits.map(this.renderCommits)}
        </Collection>
      </div>
    );
  }

};

export default LastCommits;