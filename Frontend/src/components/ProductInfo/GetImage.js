import React from 'react';

function GetImage(props) {
    return (
        <div className='imageFront' key={props.id}>
            <img src={props.url} alt={props.title} />
        </div>
    )
}

export default GetImage;