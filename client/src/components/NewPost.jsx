import React, { Component } from 'react';
import axios from 'axios'

class NewPost extends Component {

    state = {
        newPost: {
        title: "",
        text: ""
        }
        
        
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updatePost = { ...this.state.newPost }
        updatePost[attribute] = event.target.value
        this.setState({ newPost: updatePost })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const response = await axios.post(`/api/cities/${this.props.id}/posts`, {
            post: this.state.newPost
        })
        this.props.pushPosts(response.data)
    }


    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input onChange={this.handleChange} name="title" type="text" value={this.state.newPost.title} />
                    </div>
                    <div>
                        <label htmlFor="text">Text: </label>
                        <textarea onChange={this.handleChange} name="text" type="text" value={this.state.newPost.text} />
                    </div>
                    <button>Save Post</button>
                    </form>
            </div>
        );
    }
}

export default NewPost;

