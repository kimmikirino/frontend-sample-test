/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import Repository from "./components/Repository";
import Commits from "./components/Commits";
import Error from "./components/Error"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const App = () => ({
        render() {
            return (
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <h1 className="text--center top--banner text--color small--font">Meus repositórios</h1>
                            <BrowserRouter>
                                <Switch>
                                <Route exact path="/" component={Repository}/>
                                <Route path="/commits/:repo" component={Commits}/>
                                <Route component={Error}/>
                                </Switch>
                            </BrowserRouter>
                        </div>
                    </div>
                    );
        }
    }
    );
ReactDOM.render(<App/>, document.getElementById('root'));


