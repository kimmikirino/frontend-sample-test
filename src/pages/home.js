import React, { Component } from 'react';
import { connect } from 'react-redux';

import Informations from '../components/informations';
import RepositoryList from '../components/repository/list';
import Spinner from '../components/spinner';
import { fetchRepositories } from '../actions/repository';

class Home extends Component {
  componentDidMount() {
    this.props.fetchRepositories();
  }

  render() {
    const { repositories } = this.props;

    if (!repositories) {
      return <Spinner />
    }

    return (
      <div>
        <Informations />
        <RepositoryList repositories={repositories} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { repositories: state.repositories.data };
}

export default connect(mapStateToProps, { fetchRepositories })(Home);