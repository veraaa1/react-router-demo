import React, { Component } from 'react';

class Post extends Component {
    state = {
        post:null
    }
    componentDidMount() {
        const {match} = this.props
        const postId = parseInt(match.params.postId)
        this.setState({
            post:{
                postId:postId
            }
        })
    }
    render() {
        const {post} = this.state
        
        return (
                post == null?<div>waiting...</div>:<article>
                <h1>title</h1>
                <p>id:{post.postId}</p>
            </article>
        );
    }
}

export default Post;