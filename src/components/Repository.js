import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Commits from "./Commits";

class Repository extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            user: this.props.match.params.user
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users/iaopier/repos')
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
        console.log(this.state);
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                    <div className="App container">
                        <div className="row">
                            <section className="col-md-6 col-sm-12 col-xs-12 user--box">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12 col-xs-12">
                                        <h2>
                                            <img className="size" src={"" + items[0].owner.avatar_url} />
                                        </h2>
                                    </div>
                                    <div className="col-md-8 col-sm-12 col-xs-12">
                                        <p className="text--info">
                                            User: {items[0].owner.login}
                                        </p>
                                        <p className="text--info">
                                        <a href={items[0].owner.followers_url}>Followers</a>
                                        </p>
                                        <p className="text--info">
                                        <a href={items[0].owner.html_url}>GitHub</a>
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="col-md-6 col-sm-12 col-xs-12 user--box">
                                <h3>Repositórios</h3>
                                {items.map(item => (
                                                <li>
                                                    <Link to={'/commits/' + item.name} >{item.full_name}</Link>
                                    
                                    
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