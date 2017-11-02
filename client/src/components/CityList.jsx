import React from 'react';
import { Link } from "react-router-dom"
import { FlexRow } from "../styled-components/FlexContainers";
import { FlexColumn } from "../styled-components/FlexContainers";

import styled from "styled-components"

const CityContainer = FlexRow.extend`
    flex-wrap: wrap;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: white;
    opacity: .9;
    margin-bottom: 10px;
    width: 30%;
    margin-left: 15px;
    margin-right: 15px;
    font-family: 'Ranchers', cursive;

`

const CityCard = styled.div`
    display: flex;
    flex-direction: column;

    font-size: 20px;
    text-align: center;
    justify-content: space-around;

    img {
        height: 150px;
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