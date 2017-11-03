import React, { Component } from 'react';
import axios from "axios";
import NewPost from './NewPost'
import styled from "styled-components"

const CityImageBanner = styled.div `

    img {
        width: 100%;
        background-size: cover;
        background-position: center;
        height: 300px;
        background-repeat: no-repeat;
        padding-top: 0px;
        margin-top: 15px;
        margin-left: 15px;
        margin-right: 15px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  `

  const CityText = styled.div`
    text-align: center;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
    padding-top: 0px;
    padding-bottom: 10px;
    margin-left: 15px;
    margin-right: 15px;
    background-color: white;
    opacity: .8

  `

const CityName = styled.div `
    font-family: 'Rammetto One', cursive;
    font-size: 38px;
    text-align: center;
    letter-spacing: 2px;
    padding-top: 25px;
`

const CityBody = styled.div `
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          font-family: 'Cabin Condensed', sans-serif;
    font-size: 30px;
    text-align: center;
    letter-spacing: 2px;
    padding-top: 25px;
`
const PostCard = styled.div`
    display: flex;
    flex-direction: column;
    // width: 30%;
    font-size: 20px;
    width: 300px;  height: 300px; margin: 40px auto;

    text-align: center;
    justify-content: space-around;
    float: left;
    padding: 20px 10px 15px 10px;
    background: rgba(216, 212, 212, 1);
    border: 1px solid #fff;
    -moz-box-shadow: 0px 2px 15px #333;
    position: relative;
    -webkit-transform: rotate(${props => props.rotationDegrees}deg);
    
    -moz-transform: rotate(-8deg);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
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
            <CityImageBanner><img src={this.state.city.photo_url} /></CityImageBanner>
            //about
            <CityBody>
                <CityText>
                <CityName>Welcome to {this.state.city.name}</CityName>
                <div>Population: {this.state.city.population}</div>
                <div>About: {this.state.city.description}</div>
                </CityText>
            </CityBody>
            //post stuff
            <CityText>
            <button onClick={this.toggleShowForm}>Add New Post</button>
                {this.state.showForm ? <NewPost pushPosts={this.pushPosts} id={this.props.match.params.id} handleSubmit={this.handleSubmit} /> : null}
             </CityText>
              <CityText>
                {this.state.posts.map(post => (
                    <PostCard key={post.id}>
                        <h4>{post.title}</h4>
                        <h5>{post.text}</h5>
                        <button onClick={() => this.deletePost(post.id)}>Delete Post</button>
                        <button>Edit</button>
                    </PostCard>
                ))}
                </CityText>
                
               
            </div>
        );
    }
}

export default City;

