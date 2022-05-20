import React from 'react';
import Card from './Card';

const GifCatalog = ({ gifs, sendGif, loading }) => {

    return (
        <div className='GifCatalog'>
            <div className='Grid'>
            {gifs.map((gif, index) => (
                <Card 
                    gif={gif} 
                    key={index}
                    sendGif={sendGif}
                />
            ))}
            </div>
            {loading &&
                <div className='Loading'>
                    <div className='Loader'/>
                </div>
            }
        </div>
    );
}

export default GifCatalog;
