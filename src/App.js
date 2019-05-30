/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import Repository from "./components/Repository";
import Error from "./components/Error"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class App extends Component {

    render() {

        return (
                <div>
                    <h1>
                        Meus Repositórios
                    </h1>
                    <BrowserRouter>
                        <Switch>
                        <Route path="/user/:user" component={Repository}/>
                        <Route component={Error}/>
                        </Switch>
                    </BrowserRouter>
                </div>

                );
    }
};

export default App;



