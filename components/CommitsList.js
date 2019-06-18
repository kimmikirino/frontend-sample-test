import React, { Component } from 'react'
import CommitsListCss from '../components/CommitsListCss.scss'

class CommitsList extends React.Component {
    constructor(props) {
        super(props);
        this.commitPosition = React.createRef();
    }
    handleScroll() { 
        window.scrollTo(0, this.commitPosition.current.offsetTop);
    }
    componentDidMount() {
        this.handleScroll()
    }
    componentDidUpdate(prevProps) {
        console.log(this.props.commits, 'props', prevProps.commits, 'prev')
        if (this.props.commits !== prevProps.commits) {
            this.handleScroll()
        }
    }
    render() {
        const sha = this.props.sha
        const repo = this.props.repo
        const commits = this.props.commits

        return(
            <div ref={this.commitPosition} className="commits-list">

                <div className="commits-list">
                    {commits != '' ? commits.map(commit => (
                        <div className="commits-list-box" key={commit.node_id}>
                            <p><strong>Quem commitou?</strong> {commit.commit.author.name}</p>
                            <p><strong>Quando commitou?</strong> {commit.commit.author.date}</p>
                            <p><strong>Mensagem:</strong> {commit.commit.message}</p>
                        </div>
                    )) : null}
                </div>
                <style jsx>{CommitsListCss} </style>
            </div>
        )
    }
 }

export default CommitsList