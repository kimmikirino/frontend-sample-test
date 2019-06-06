import React, { Component } from "react";

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <SearchUser />
        <UserProfile />
      </Container>
    );
  }
}

export default HomeScreen;
