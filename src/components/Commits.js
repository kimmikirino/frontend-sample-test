import React, {Component} from "react";

class Commits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            repo: this.props.match.params.repo
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/repos/iaopier/" + this.state.repo + "/commits")
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        isLoaded: true,
                        items: json
                    });
                });

    }

    render() {
        var isLoaded = this.state.isLoaded;
        var items = this.state.items;
        items = items.slice(0,10);
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                    <div className="App container">
                        <div className="row">
                            <section className="col-md-12 col-sm-12 col-xs-12">
                                <h3>Commit</h3>    
                                
                                {items.map(item => (
                                                        <li className="border--items padding">
                                                            <p>{item.commit.author.name}</p>
                                                            <p>{item.commit.author.date}</p>
                                                            <p>{item.commit.message}</p>
                                            
                                            
                                                        </li>
                                                        ))}
                            </section>
                        </div>
                    </div>
                    );
        }
    }

}
export default Commits;