import React from 'react';

const Search = ({ query, setQuery, setMessages }) => {

    return (
        <div className='Search'>
            <form onSubmit={(e) => {
                e.preventDefault();
                setMessages(messages => ([...messages, { 
                    content: query, 
                    type: 'text',
                    time: Date.now() 
                }]));
            }}>
                <input
                    type='text'
                    placeholder='Напишите сообщение...'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            </form>
        </div>
    );
}

export default Search;