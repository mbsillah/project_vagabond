import React from 'react';
import { Link } from "react-router-dom"
import { FlexRow } from "../styled-components/FlexContainers";
import { FlexColumn } from "../styled-components/FlexContainers";
import styled from "styled-components"

const CityContainer = FlexRow.extend`
    flex-wrap: wrap;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 15px;
    font-family: 'Rammetto One', cursive;

`

const CityCard = styled.div`
    &:hover {
        opacity: .9;
        font-size: 26px;
    }
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
    
    img {
        height: 80%;
        filter: saturate(40%) grayscale(30%);
    }
    a {
        padding-bottom: 10px;
    }
    a:visited {
        color: rgb(17, 17, 114);
    }
`




const CityList = (props) => {
    return (
        <CityContainer>
            {
                props.cities.map((city, index) => {

                var num = Math.random()*25
                
                if (index % 2 === 0 ) {
                    num = num * -1
                }

                    
                return (
                    
                        <CityCard rotationDegrees={num}>
                            <img src={city.photo_url} />
                            <br />
                            <Link to={`/cities/${city.id}`}> {city.name} </Link>
                        </CityCard>

                )
            })

            }
            
        </CityContainer>
    );
};

export default CityList;