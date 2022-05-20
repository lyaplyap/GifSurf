import React, { useState, useEffect } from 'react';

import GifCatalog from './GifCatalog';
import Search from './Search';

const GifSearch = ({ messages, setMessages }) => {

    const [query, setQuery] = useState('');
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);
    
    // Calling the Giphy API to search gifs
    const searchCall = (query, need_adding = false) => {
        setLoading(true);
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${query}&limit=10&offset=${!need_adding ? 0 : gifs.length}`)
            .then(response => {
                setLoading(false);
                return response.json();
            })
            .then(result => {
                !need_adding 
                    ? setGifs(result.data)
                    : setGifs(gifs => ([...gifs, ...result.data]))
            })
            .catch(() => {
                setLoading(false);
                console.log('API error...');
            });
    };

    // Send message with gif
    const sendGif = (gif) => {
        setMessages(messages => ([...messages, { content: gif, type: 'gif', time: Date.now() }]));
        setQuery('');
        setGifs([]);
    };

    // useEffect to find gifs after stopping user input
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            if (query.startsWith('/gif ') && query.substring(5).trim() !== '') {
                searchCall(query.substring(5).trim());
            } else {
                setGifs([]);
            }
        }, 500);
        return () => clearTimeout(timeOutId);
    }, [query]);

    // useEffect to clear input
    useEffect(() => {
        setQuery('');
    }, [messages]);

    // Observer for infinite gifs loading
    const infinteObserver = new IntersectionObserver(
        ([entry], observer) => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                searchCall(query.substring(5).trim(), true);
            }
        },
        { threshold: 0.5 }
    );
    
    // useEffect for infinite gifs loading
    useEffect(() => {
        const lastCard = document.querySelector(".Card:last-child");
        if (lastCard) {
            infinteObserver.observe(lastCard);
        }
    }, [gifs])


    return (
        <div className='GifSearch'>
            {gifs.length !== 0 && (
                <GifCatalog
                    gifs={gifs}
                    sendGif={sendGif}
                    loading={loading}
                />
            )}
            <Search
                query={query}
                setQuery={setQuery}
                setMessages={setMessages}
            />
        </div>
    );
}

export default GifSearch;