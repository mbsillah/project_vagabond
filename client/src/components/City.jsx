import React, { Component } from 'react';
import axios from "axios";
import NewPost from './NewPost'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import ConfirmationAlert from './ConfirmationAlert'
import moment from 'moment'
import PostCard from './PostCard'
import { FlexRow } from "../styled-components/FlexContainers";


const CityImageBanner = styled.div`

    img {
        width: 100%;
        background-size: cover;
        background-position: center;
        height: 300px;
        background-repeat: no-repeat;
        padding-top: 0px;
        margin-top: 15px;
        margin-right: 0px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  `

  const CityContainer = FlexRow.extend`
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
        padding-top: 0px;
        padding-bottom: 10px;
        background-color: white;
        opacity: .8;
        justify-content: center;
        margin-left: 10px;
        margin-right: 10px;
  `

const CityName = styled.div`
    font-family: 'Rammetto One', cursive;
    font-size: 38px;
    text-align: center;
    letter-spacing: 2px;
    padding-top: 25px;
`

const CityBody = styled.div`
    font-family: 'Cabin Condensed', sans-serif;
    font-size: 30px;
    text-align: center;
    letter-spacing: 2px;
    padding-top: 25px;
    text-align: center;
    p {
        font-size: 24px;
        font-family: 'Cabin Condensed', sans-serif;
    }
  
`



class City extends Component {

    state = {
        city: {},
        posts: [],
        showForm: false,
        
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
        newArray.unshift(newPost)
        this.setState({ posts: newArray })
        this.toggleShowForm()
    }

    render() {


        return (
            <div>
            <CityImageBanner><img src={this.state.city.photo_url} /></CityImageBanner>
            <CityContainer>
            <CityBody>
              
                <CityName>Welcome to {this.state.city.name}</CityName>
                <p>Population: {this.state.city.population}</p>
                <p>About: {this.state.city.description}</p>
             
            <button onClick={this.toggleShowForm}>Add New Post </button>
               </CityBody>
                        </CityContainer>

                {this.state.showForm ? <NewPost pushPosts={this.pushPosts} id={this.props.match.params.id} handleSubmit={this.handleSubmit} /> : null}
          
                {this.state.posts.map(post => (
                    <PostCard deletePost={this.deletePost} key={post._id} post={post} city={this.state.city}/>
                ))}
                 
                   </div>
        );
    }
}

export default City;

