import React, { useEffect } from 'react';
import Pusher from 'pusher-js';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {

  useEffect(() => {
    const pusher = new Pusher('b4bce440702782b3d04c', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });
   
    return () => {
      
    }
  }, [])

  return (
    <div className="app">

      <div className="app__body">
        {/* sidebar */}
        <Sidebar />

        {/* Chat */}
        <Chat />
      </div>



    </div>
  );
}

export default App;
