import React from 'react';
import { Link } from "react-router-dom"

const CityList = (props) => {
    return (
        <div>
            {
                props.cities.map((city) => {
                return (
                    <div>
                    <Link to={`/cities/${city.id}`}> {city.name} </Link>
                    <img src={city.photo_url} />
                    </div>

                )
            })

            }
            
        </div>
    );
};

export default CityList;