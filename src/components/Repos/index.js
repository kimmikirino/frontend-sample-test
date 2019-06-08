import React, { Component } from "react";
import { MainContainer, Container, Header, Title } from "./styles";

class Repos extends Component {
  state = {
    commits: {}
  };

  getLastTenCommits = () => {
    const Commits = [];

    Commits.push(
      <ul>
        {Object.keys(this.props.userData.commits).map(commitIndex => {
          return (
            <li>
              {this.props.userData.commits[commitIndex].commit.commiter.name}
              {": "}
              {this.props.userData.commits[commitIndex].commit.message}
            </li>
          );
        })}
      </ul>
    );

    return Commits;
  };

  render() {
    return (
      <MainContainer>
        <Container>
          <Header>
            <img
              src={this.props.userData.user.avatar_url}
              alt={`Img from ${this.props.userData.user.name}`}
            />
          </Header>
        </Container>
        <Title>Repositórios de {this.props.userData.user.name}</Title>
        <Container vertical>
          {Object.keys(this.props.userData.repos).map(index => {
            return (
              <p key={this.props.userData.repos[index].id}>
                <span
                  onClick={() =>
                    this.props.getCommits(
                      this.props.userData.repos[index].name,
                      this.props.userData.repos[index].owner.login
                    )
                  }
                >
                  {this.props.userData.repos[index].name}
                </span>
              </p>
            );
          })}
        </Container>
        {Object.keys(this.props.userData.commits).length !== 0 ? (
          <p className="history">Histórico de Commits</p>
        ) : null}
        <ul>
          {this.props.userData.commits &&
            Object.keys(this.props.userData.commits).map(commitIndex => {
              if (commitIndex >= 10) return null;
              return (
                <li>
                  <strong>
                    {
                      this.props.userData.commits[commitIndex].commit.author
                        .name
                    }
                  </strong>
                  {": "}
                  {this.props.userData.commits[commitIndex].commit.message}
                </li>
              );
            })}
        </ul>
      </MainContainer>
    );
  }
}

export default Repos;
