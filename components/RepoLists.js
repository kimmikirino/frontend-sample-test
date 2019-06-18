import React, { useState } from 'react'
import CommitsList from './CommitsList'
import RepoListCss from '../components/RepoListCss.scss'

const RepoList = props => {

    const [sha, setBranch] = useState('')
    const commits = props.commits
    const user = props.user
    const repos = props.repo
    const setCommits = props.setCommits
    
    return (
        <div className="repo-list-wrapper">
            {repos != '' ? <p>Repositórios do <strong>{user}</strong></p> : null}
            <div className="repo-list">
                {repos != '' ? repos.map(repo => (
                    <div className="repo-list-wrapper"  key={repo.id}>
                        <div className="repo-list-box">
                            <p className="title">{repo.name}</p>
                            <p className="description">{repo.description}</p>
                        </div>
                        <button onClick={() => getBranches(user, setBranch, repo, setCommits)}>Listar Commits</button>
                    </div>
                )) : null}
            </div>
            {
                commits !== '' ?
                    <CommitsList
                        sha={sha}
                        repo={repos}
                        commits={commits}
                    /> : null
            }
            <style jsx>{RepoListCss} </style>
        </div>
    )
}

const getRepos = (user, setData, setCommits) => {
    fetch (`https://api.github.com/users/${user}/repos`)
        .then(res => res.json())
        .then( data => {
            return (
                setData(data),
                props.setCommits('')
            )
        })
}

const getBranches = (user, setBranch, repo, setCommits) => (
    fetch (`https://api.github.com/repos/${user}/${repo.name}/branches/master`)
        .then(res => res.json())
        .then( data => {
            let sha = data.commit.sha
            return (
                setBranch(sha),
                getCommits(user, sha, repo, setCommits)
            )
        })
)

const getCommits = (user, sha, repo, setCommits) => {
    fetch (`https://api.github.com/repos/${user}/${repo.name}/commits?${sha}`)
        .then(res => res.json())
        .then( data => {
            return setCommits(data)
        })
}

export default RepoList