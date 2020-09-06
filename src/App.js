import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import axios from "./axios"
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    axios.get(`/messages/sync`)
      .then(response => {
        setMessages(response.data);
      })
  }, []);

  useEffect(() => {
    const pusher = new Pusher('b4bce440702782b3d04c', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  // console.log(messages[messages.length-1].timestamp)


  return (
    <div className="app">
      {!user ? (<Login />) :
        <div className="app__body">

          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat
                  messages={messages}
                />
              </Route>

              <Route path="/">

              </Route>


            </Switch>
          </Router>

        </div>


      }


    </div>
  );
}

export default App;
