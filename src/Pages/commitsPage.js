import React, {Component} from 'react';
import styled from 'styled-components'

const Container = styled.div`
    position:relative;
    padding:30px;

    @keyframes fadeIn {
        0%{opacity:0; transform:translate(-10%,0%)}
        100%{opacity:1; transform:translate(0%,0%)}
    }
    a{
        text-decoration:none;
        display:flex;
        align-items:center;
        font-size:18px;
        margin:0px 0px 10px 0px;
        background:#f7f7f7;
        padding:3px;
        color:#515151;
        i{
            font-size:16px;
            margin-left:5px;
        }
        &:hover{
            color:orange;
        }
    }

    .list-area{
        margin-top:20px;
    }

`

class Index extends Component {

    state = {
        commitsList:[]
    }


    componentDidMount(){
        const {urlCommits} = this.props.location.state;
        const urlToAllCommitFromThisProject = urlCommits.replace('{/sha}','');
     
        fetch(`${urlToAllCommitFromThisProject}`)
        .then(response => {
        response.json().then(data => {
            this.setState({ 
                commitsList : data 
            })
        });
        }).catch(function (err) {
            console.log(err);
        });
    
    }

    filterByName = (event)=>{
        
        let allCommits = document.getElementsByName('commit-line')

        allCommits.forEach(function(element){
            if( element.innerText.replace('launch', '').toLowerCase().indexOf(event.target.value) === -1 ){
                element.style.display = 'none'
            }else{
                element.style.display = 'block'
            }
        })
    }
 

    render() {
        return (
            <Container>
                <h2 className="title">Últimos 10 commits</h2>
            
                <label className="custom-label flex-area flex-direction-column a-items-start a-content-start">
                    <span>Filtrar por palavra chave</span>
                    <input type="text" className="input-text-search" onChange={this.filterByName}/>
                </label>

                <div className="flex-area flex-direction-column list-area">
                {
                    this.state.commitsList.map((element,index) =>{
                        return index < 10 ?
                            <a key={index} href={element.html_url} target="_Blank" rel="noopener noreferrer" name="commit-line">
                                {element.commit.message}
                                <i className="material-icons">launch</i>
                            </a>
                            : 
                            false
                    })
                }
                </div>
            </Container>  
        )

    }
}

export default Index;
