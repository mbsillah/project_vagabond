import React, { Component } from 'react';
import axios from 'axios';
import styled from "styled-components"
import { FlexRow } from "../styled-components/FlexContainers";


  const NewPostFormContainer = FlexRow.extend`
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
        padding-top: 0px;
        padding-bottom: 10px;
        background-color: white;
        opacity: .8;
        justify-content: center;
        margin: 0 auto;
        width: 100%;
        margin-bottom: 20px;
        align-items: center;
  `

  const NewPostForm = FlexRow.extend`
    margin-top: 20px;
  `

  const FormText = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Cabin Condensed', sans-serif;
    font-size: 18px;
    color: rgb(17, 17, 114);
    label {
        padding-right: 5px;
        margin-bottom: 5px;
    }
    textarea, input {
        border-radius: 5px;
        width: 100%
    }

  `

  const NewFormText = styled.div`
    font-size: 32px;
  `




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
            <NewPostFormContainer>
            <NewPostForm>
            
            
              <form onSubmit={this.handleSubmit}>
                    <FormText>
                        <NewFormText>Write new post below: </NewFormText>
                        <label htmlFor="title">Title: </label>
                        <input onChange={this.handleChange} name="title" type="text" value={this.state.newPost.title} />
                    </FormText>
                    <FormText>
                        <label htmlFor="text">Text: </label>
                        <textarea onChange={this.handleChange} name="text" type="text" value={this.state.newPost.text} />
                    </FormText>
                    <button>Save Post</button>
                    </form>
                    </NewPostForm>
                    </NewPostFormContainer>
            </div>
        );
    }
}

export default NewPost;

