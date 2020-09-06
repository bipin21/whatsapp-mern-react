import React, { useState, useEffect } from 'react'
import "./Chat.css";
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';
import { useParams } from 'react-router-dom';
import db from './firebase';

function Chat({ messages }) {

    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const [roomName, setRoomName] = useState('');
    const { roomId } = useParams();

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
        }
        else {

        }

    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));

    }, [roomId])


    const sendMessage = async (e) => {
        e.preventDefault();

        axios.post("/messages/new", {
            message: input,
            name: "Bp1",
            timestamp: new Date().toString(),
            recieved: false
        });

        setInput('');

    }


    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at...</p>

                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>



            </div>

            <div className="chat__body">
                {
                    messages.map(message => (
                        <p className={`chat_message ${message.recieved && "chat__reciever"}`}>
                            <span className="chat__name">{message.name}</span>
                            {message.message}
                            <span className="chat__timestamp">{message.timestamp}</span>
                        </p>
                    ))
                }


            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
