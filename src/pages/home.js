import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getUserRequest, getReposRequest } from "../store/actions/user";

import Main from "../containers/main";

class HomeScreen extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Main
          data={this.props.user}
          getUser={this.props.getUserRequest}
          getRepos={this.props.getReposRequest}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUserRequest,
      getReposRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
