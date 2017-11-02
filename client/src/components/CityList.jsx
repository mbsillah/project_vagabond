import React from 'react';
import { Link } from "react-router-dom"
import { FlexRow } from "../styled-components/FlexContainers";
import { FlexColumn } from "../styled-components/FlexContainers";

import styled from "styled-components"

const CityContainer = FlexRow.extend`
    flex-wrap: wrap;
   
    opacity: .9;
    margin-bottom: 10px;
    width: 30%;
    margin-left: 15px;
    margin-right: 15px;
    font-family: 'Ranchers', cursive;

`

const CityCard = styled.div`
    :hover {
        
    }
    display: flex;
    flex-direction: column;

    font-size: 20px;
    text-align: center;
    justify-content: space-around;

    width: 300px;  height: 300px; margin: 40px auto;

    float: left;
	padding: 10px 10px 15px 10px;
	background: #eee;
	border: 1px solid #fff;
	-moz-box-shadow: 0px 2px 15px #333;
	position: relative;

    -webkit-transform: rotate(-8deg);
	-moz-transform: rotate(-8deg);

    
    img {
      
        height: 300px;
        max-width: 100%
    }

    a {
        padding-bottom: 10px;
    }
`

const CityList = (props) => {
    return (
        <div>
            {
                props.cities.map((city) => {
                return (
                    <CityContainer>
                    <CityCard>
                        <img src={city.photo_url} />
                        <br />
                        <Link to={`/cities/${city.id}`}> {city.name} </Link>

                    </CityCard>
                    </CityContainer>

                )
            })

            }
            
        </div>
    );
};

export default CityList;