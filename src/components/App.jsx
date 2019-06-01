import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div className="main-app">
        <header className="main-header">
          <Link to="/">React GitHub Project</Link>
        </header>
        <main className="main-content container">
          {this.props.children}
        </main>
      </div>
    );
  }
};

export default App;
