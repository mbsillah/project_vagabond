import React, { Component } from 'react';
import axios from "axios";
import NewPost from './NewPost'
import styled from "styled-components"
import { Link } from 'react-router-dom'

const CityImageBanner = styled.div`

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
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
    padding-top: 0px;
    padding-bottom: 10px;
    margin-left: 15px;
    margin-right: 15px;
    background-color: white;
    opacity: .8

  `

const CityName = styled.div`
    font-family: 'Rammetto One', cursive;
    font-size: 38px;
    text-align: center;
    letter-spacing: 2px;
    padding-top: 25px;
`

const CityBody = styled.div`
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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




    async componentWillMount() {
        this.getCitiesAndPosts();

    }

    getCitiesAndPosts = async () => {
        try {
            const { id } = this.props.match.params
            const response = await axios.get(`/api/cities/${id}`)
            this.setState({ city: response.data })
            const postResponse = await axios.get(`/api/cities/${id}/posts`)
            this.setState({ posts: postResponse.data })

        } catch (error) {
            console.log(error)
        }
    }


    deletePost = async (post) => {
        try {
            const { id } = this.props.match.params
            const response = await axios.delete(`/api/cities/${id}/posts/${post}`)
            console.log(response)
            this.setState({ posts: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    toggleShowForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    pushPosts = (newPost) => {
        const newArray = [...this.state.posts]
        newArray.push(newPost)
        this.setState({ posts: newArray })
        this.toggleShowForm()
    }

    // const population = {this.state.city.population}

    render() {


        return (
            <div>
                <CityImageBanner><img src={this.state.city.photo_url} /></CityImageBanner>
                <CityBody>
                    <CityText>
                        <CityName>Welcome to {this.state.city.name}</CityName>
                        <div>Population: {this.state.city.population}</div>
                        <div>About: {this.state.city.description}</div>
                        <img src={this.state.city.photo_url} />

                        {this.state.posts.map(post => (
                            <div key={post.id}>
                                <h4>{post.title}</h4>
                                <h5>{post.text}</h5>
                                <button onClick={() => this.deletePost(post.id)}>Delete Post</button>
                                <Link to={`/cities/${this.state.city.id}/posts/${post.id}`}>
                                <button>Edit</button>
                                </Link>
                            </div>
                        ))}
                        <button onClick={this.toggleShowForm}>Add New Post</button>
                        {this.state.showForm ? <NewPost pushPosts={this.pushPosts} id={this.props.match.params.id} toggleShowForm={this.toggleShowForm}/> : null}
                    </CityText>
                </CityBody>
            </div>
        );
    }
}

export default City;

