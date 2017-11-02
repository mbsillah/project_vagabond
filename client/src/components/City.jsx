import React, { Component } from 'react';
import axios from "axios";
import NewPost from './NewPost'
import styled from "styled-components"

const CityName = styled.div `
    font-family: 'Ranchers', cursive;
    font-size: 38px;
    text-align: center;
    letter-spacing: 2px;
    text-shadow: 1px 1px yellow;
    padding-top: 25px;
`
const CityDetails = styled.div `
font-family: 'Cabin Condensed', sans-serif;

    font-size: 30px;
    text-align: center;
    letter-spacing: 2px;
    padding-top: 25px;
`

class City extends Component {

    state = {
        city: {},
        posts: [],
        showForm: false
    }




async componentWillMount(){
  this.getCitiesAndPosts();

}

async componentWillReceiveProps(){
    if (this){}
}

pushPosts = (newPost) => {
    const newArray = [...this.state.posts]
    newArray.push(newPost)
    this.setState({posts: newArray})
}

getCitiesAndPosts = async () => {
    try {
        const { id } = this.props.match.params
        const response = await axios.get(`/api/cities/${id}`)
        this.setState({city: response.data})
        const postResponse = await axios.get(`/api/cities/${id}/posts`)
        this.setState({posts: postResponse.data})

    } catch(error) {
        console.log(error)
    }
}


deletePost = async (post) => {
   try {
       const { id } = this.props.match.params    
       const response = await axios.delete(`/api/cities/${id}/posts/${post}`)
       console.log(response)
       this.setState({posts: response.data}) 
    } catch (error) {
        console.log(error)
    }
}

toggleShowForm = () => {
    this.setState({showForm: !this.state.showForm})
}

// const population = {this.state.city.population}

    render() {


        return (
            <div>
                <CityName>Welcome to {this.state.city.name}</CityName>
                <CityDetails>
                <div>Population: {this.state.city.population}</div>
                <div>About: {this.state.city.description}</div>
                <img src={this.state.city.photo_url} />
                </CityDetails>
                {this.state.posts.map(post => (
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <h5>{post.text}</h5>
                        <button onClick={() => this.deletePost(post.id)}>Delete Post</button>
                        <button>Edit</button>
                    </div>
                ))}
                <button onClick={this.toggleShowForm}>Add New Post</button>
                {this.state.showForm ? <NewPost pushPosts={this.pushPosts} id={this.props.match.params.id} handleSubmit={this.handleSubmit} /> : null}
            </div>
        );
    }
}

export default City;

