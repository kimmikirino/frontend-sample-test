import React, {Component} from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import suggestionName from '../img/suggestion-of-name.png'
import loadingSvg from '../img/loading.svg'

const Container = styled.div`
    position:relative;
    padding:30px;
    .btn{
        cursor:pointer;
        text-decoration:none;
        border:none;
        background:none;
        padding:10px 30px;
        font-weight:600;
        margin-top:5px;
        display:flex;
        min-width:106px;
    }
    .btn-white{
        border:1px solid #fff;
    }
    .btn-black{
        background:#515151;
        color:#fff;
        font-weight:600;
        margin-top:5px;
    }
    
    .cards-area{
        display:flex;
        flex-wrap:wrap;
        margin:30px -5px -5px -5px;
        a{
            text-decoration:none;
        }
    }
    .card-repositorie{
        position:relative;
        margin:5px 5px;
        max-width: 272px;
        padding:20px;
        background:#515151;
        color:#fff;
        animation: fadeIn 300ms ease-in;

        @keyframes fadeIn {
            0%{opacity:0; transform:translate(-10%,0%)}
            100%{opacity:1; transform:translate(0%,0%)}
        }
        h2{
            font-size:20px;
            margin-bottom:30px;
        }
        a{
            color:inherit
        }
    }

    .custom-label:after{
        content:'';
        position:absolute;
        top:0px;
        right:0px;
        background:url(${suggestionName}) no-repeat;
        width:125px;
        height:37px;
        transform:translate(105%,0%)
    }
    
 
`

class Index extends Component {

    state = {
        user:'',
        repositories:[],
        loading: false
    }

    getRepositoriesFromUser = (userName)=>{

        if(userName !== ''){

            this.setState({loading:true})

            fetch(`https://api.github.com/users/${userName}/repos`)
            .then(response => {
            response.json().then(data => {
                this.setState({ 
                    repositories:data,
                    loading:false 
                }, ()=>sessionStorage.setItem('searchName', userName) )
            });
            }).catch(function (err) {
                console.log(err);
            });
        }
    }

    changeNameUser = (event) =>{
        this.setState({ 
            user : event.target.value 
        })
    }

    componentDidMount(){
        if(sessionStorage.searchName !== undefined){
            this.getRepositoriesFromUser(sessionStorage.searchName)
            document.querySelector('.input-text-search').value = sessionStorage.searchName
        }
    }


    render() {
        return (
            <Container>
                <h1 className="title">Encontre os repositórios públicos do seu Dev preferido!</h1>

                <label className="custom-label flex-area flex-direction-column a-items-start a-content-start">
                    <span>Digite o nome do usuário</span>
                    <input type="text" onChange={this.changeNameUser} className="input-text-search"/>
                </label>
                <button type="button" className="btn btn-black" onClick={()=>this.getRepositoriesFromUser(this.state.user)}>
                    { this.state.loading 
                        ? 
                        <img src={loadingSvg} alt="loading" className="loading-image"/> 
                        : 
                       'Buscar'
                    }

                </button>

                <div className="cards-area">
                    {
                        this.state.repositories.map( (element, index)=>{
                            return (
                                <Link key={index} className="card-repositorie" to={{
                                    pathname:`/${element.name}`,
                                    state:{
                                        urlCommits: element.commits_url,
                                        access:true
                                    }
                                }}>
                                <div>
                                    <h2>{element.name}</h2>
                                    <span className="btn btn-white">Ver 10 últimos commits</span>
                                </div>
                                </Link>
                            )
                        })
                    }
                </div>
           
            </Container>  
        )

    }
}

export default Index;
