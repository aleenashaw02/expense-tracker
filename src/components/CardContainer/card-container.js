import React from 'react';
import './card-container.css'
import Card from '../Card/card';
function CardContainer({data}) {
    return (
        <div className="card-container">

            {data.map((value,index) => {
                return(
                  <Card expense={value} key={index} />
                )
            })}
         
        </div>
    );
}
export default CardContainer;