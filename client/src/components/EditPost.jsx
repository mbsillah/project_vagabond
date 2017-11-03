import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class EditPost extends Component {
  
              
    
    
    state = {
        post: {
        title: "",
        text: ""
        },
        redirectToCityPage: false
        
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updatePost = { ...this.state.post }
        updatePost[attribute] = event.target.value
        this.setState({ post: updatePost })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const cityId = this.props.match.params.city_id
        const postId = this.props.match.params.id
        const response = await axios.patch(`/api/cities/${cityId}/posts/${postId}`, {
            post: this.state.post
        })
        this.setState({redirectToCityPage: true, post: response.data})        
        
    }



    render() {

        if (this.state.redirectToCityPage) {
            const cityId = this.props.match.params.city_id
            return <Redirect to={`/cities/${cityId}`} />
        }

        return (
            <div>
                <h1>Edit Current Post</h1>
              <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input onChange={this.handleChange} name="title" type="text" value={this.state.post.title} />
                    </div>
                    <div>
                        <label htmlFor="text">Text: </label>
                        <textarea onChange={this.handleChange} name="text" type="text" value={this.state.post.text} />
                    </div>
                    <button>Save Post</button>
                    </form>
            </div>
        );
    }
}


export default EditPost;