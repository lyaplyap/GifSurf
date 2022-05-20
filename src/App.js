import React, { useState } from 'react';
import './style.css';

import GifSearch from './components/GifSearch';
import Messages from './components/Messages';

const App = () => {
  const [messages, setMessages] = useState([
    { content: 'Привет!', type: 'text', time: Date.now() },
    { content: 'Это мой взгляд на тестовое задание в команду «Веб-мессенджера»😄', type: 'text', time: Date.now() },
    { content: 'Вот ссылка на репозиторий проекта: https://github.com/hrrcnkll/GifSurf', type: 'text', time: Date.now() },
    { content: 'Чтобы выбрать гифки, напиши /gif + нужная фраза и нажми на понравившуюся', type: 'text', time: Date.now() },
    { content: 'Например, /gif alf', type: 'text', time: Date.now() },
    { content: 'Или просто оставь здесь любое сообщение', type: 'text', time: Date.now() },
    { content: 'И спасибо, что смотришь)', type: 'text', time: Date.now() }
  ]);

  return (
    <div className='App'>
      <Messages messages={messages}/>
      <GifSearch messages={messages} setMessages={setMessages}/>
    </div>
  );
}

export default App;
