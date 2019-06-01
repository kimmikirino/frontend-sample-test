import React from 'react';
import { browserHistory as history } from 'react-router';
import { Row, Col, Button } from 'react-materialize';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleSubmit(e) {
    e.preventDefault();
    history.push(`/user/${this.refs.userInput.value}`)
  }

  render() {
    return (
      <div className="search-page">
        <form onSubmit={this._handleSubmit}>
          <Row>
            <Col s={12}>
              GitHub username:
              <div className="input-field inline">
                <input ref="userInput" type="text" />
              </div>
            </Col>
            <Button waves="light">Pesquisar</Button>
          </Row>
        </form>
      </div>
    );
  }
};

export default Search;
