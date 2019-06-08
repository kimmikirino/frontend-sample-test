import React, { Component } from "react";
import { Container, Input, Button, Card, Repo } from "./styles";

import { Link } from "react-router-dom";

class Main extends Component {
  state = {
    inputField: ""
  };

  clickHandler = e => {
    e.preventDefault();
    this.setState({ inputField: "" });
    this.props.getUser(this.state.inputField);
  };

  render() {
    return (
      <Container>
        <Container small>
          <Input
            type="text"
            autoFocus
            placeholder={"Digite o nome do usuário"}
            value={this.state.inputField}
            onChange={e => this.setState({ inputField: e.target.value })}
          />
          <Button type="submit" onClick={e => this.clickHandler(e)}>
            {">"}
          </Button>
        </Container>
        <Card>
          {Object.keys(this.props.data.user).length !== 0 && (
            <>
              <img
                src={this.props.data.user.avatar_url}
                alt={this.props.data.user.name}
              />
              <p>{this.props.data.user.name}</p>
              <a href={this.props.data.user.url}>{this.props.data.user.url}</a>
              <Repo
                to="/repos"
                onClick={() => this.props.getRepos(this.props.data.user.login)}
              >
                <span>VER</span>
                {"Repos"}
              </Repo>
            </>
          )}
        </Card>
      </Container>
    );
  }
}

export default Main;
