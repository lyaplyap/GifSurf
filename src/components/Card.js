import React from 'react';

const Card = ({ gif, sendGif }) => {

    return (
        <img 
            className='Card' 
            src={gif.images?.fixed_height.url} 
            alt='gif' 
            onClick={() => sendGif(gif)}
        />
    );
}

export default Card;