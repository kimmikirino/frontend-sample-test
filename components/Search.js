import React, { useState } from 'react'
import RepoLists from '../components/RepoLists'
import SearchCss from '../components/SearchCss.scss'

const Search = props => {
    const [user, setUser] = useState('')
    const [data, setData] = useState('')
    const [commits, setCommits] = useState('')

    return (
        <div className="wrapper-index">
            <input 
                placeholder='Digite o usuário'
                value={user} 
                name="user"
                onChange={event => setUser(event.target.value)}
            />
            <button className="principal"
                onClick={() => getRepos(user, setData, setCommits)}>
                Listar Repositório
            </button>
            {
                user !== '' ? 
                <RepoLists
                    user={user}
                    repo={data}
                    setData={setData}
                    setCommits={setCommits}
                    commits={commits}
                /> : null
            }

            <style jsx>{SearchCss} </style>
        </div>
    )
}

const getRepos = (user, setData, setCommits) => {
    fetch (`https://api.github.com/users/${user}/repos`)
        .then( res => res.json() )
        .then( data => {
            return (
                setData(data),
                setCommits('')
            )
        })
}

export default Search