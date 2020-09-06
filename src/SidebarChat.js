import React, { useEffect, useState } from 'react'
import "./SidebarChat.css"
import { Avatar } from '@material-ui/core'
import db from './firebase';
import { Link, useParams } from 'react-router-dom';
import axios from './axios';

function SidebarChat({ id, name, addNewChat }) {

    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState('');
    const { roomId } = useParams();
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    useEffect(() => {
        axios.get('/messages/sync')
            .then(response => {
                setMessages(response.data);
            })
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if (roomName) {
            db.collection('rooms').add({
                name: roomName
            });
        }
    }


    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{ messages[0]?.roomId == roomId &&  messages[0]?.message} </p>
                </div>
            </div>
        </Link>

    ) :
        (
            <div onClick={createChat} className="sidebarChat">
                <h2>Add new chat</h2>

            </div>
        )
}

export default SidebarChat
