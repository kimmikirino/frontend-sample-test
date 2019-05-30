import React, {Component} from "react";

class Repository extends Component{
  constructor(props){
      super(props);
      this.state = {
          items: [],
          isLoaded: false,
          user: this.props.match.params.user
      };
  }

  componentDidMount(){
    fetch('https://api.github.com/users/'+this.state.user+'/repos')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        items: json
      });
    });
  }

  render(){
    var isLoaded = this.state.isLoaded;
    var items = this.state.items;
    console.log(this.state);
    if(!isLoaded){
      return <div>Loading...</div>;
    }else{
      return (
          <div className="App">
              <div className="row">
                <section className="col-md-12 ">
                  <h2>User: {this.state.user}</h2>
                  <h3>Repositórios</h3>
                  {items.map(item =>(
                    <li>
                        {item.full_name}
                    </li>
                  ))}
                </section>
              </div>
          </div>
        );
    }
  }

}

export default Repository;