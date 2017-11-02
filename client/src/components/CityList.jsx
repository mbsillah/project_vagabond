import React from 'react';
import { Link } from "react-router-dom"
import { FlexRow } from "../styled-components/FlexContainers";
import { FlexColumn } from "../styled-components/FlexContainers";
import styled from "styled-components"

const CityContainer = FlexRow.extend`
    flex-wrap: wrap;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    // background-color: white;
    // opacity: .9;
    margin-bottom: 10px;
    // width: 200px;
    margin-left: 15px;
    margin-right: 15px;
    font-family: 'Ranchers', cursive;

`

const CityCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    font-size: 20px;
    text-align: center;
    justify-content: space-around;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: white;
    margin-left: 10px;
    margin-right: 10px;
    opacity: .9;


    img {
        height: 80%

    }

    a {
        padding-bottom: 10px;
    }
`

const CityList = (props) => {
    return (
        <CityContainer>
            {
                props.cities.map((city) => {
                return (
                    
                        <CityCard>
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