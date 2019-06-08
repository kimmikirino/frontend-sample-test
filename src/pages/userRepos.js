import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCommitsRequest } from "../store/actions/user";

import Repos from "../components/Repos";

class UserRepos extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="mainContainer">
        <Repos
          userData={this.props.user}
          commits={this.props.commits}
          getCommits={this.props.getCommitsRequest}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  commits: state.commits
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCommitsRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserRepos);
