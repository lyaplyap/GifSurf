import React, { useEffect } from 'react';

const Messages = ({ messages }) => {
    
    // Get time from utc
    const getHourMinute = (utc) => {
        const _utc = new Date(utc);
        return `${('0' + (_utc.getHours())).slice(-2)}:${('0' + (_utc.getMinutes())).slice(-2)}`
    };

    // Scrolling to bottom after sending a message
    const scrollToBottom = () =>{ 
        setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight, 
                behavior: 'auto'
            }); 
        }, 300);
    }; 

    // useEffect to scroll to bottom
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className='Messages'>
            <header className='messages-header'>Избранное</header>
            <>
            {messages.map((message, index) => (
                <div className='Message' key={index}>
                    {message.type === 'text' &&
                        <p className='message-text'>
                            {message.content}
                        </p>
                    }
                    {message.type === 'gif' && 
                        <img 
                            className='message-gif'
                            src={message.content.images.original.url} 
                            alt='message-gif'
                        />
                    }
                    <p className='message-time'>
                        {getHourMinute(message.time)}
                    </p>
                </div>
            ))}
            </>
        </div>
  );
}

export default Messages;