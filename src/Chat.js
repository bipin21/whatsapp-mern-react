import React from 'react'
import "./Chat.css";
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
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
                <p className="chat_message">
                    <span className="chat__name"> Bipin</span>
                    This is message
                    <span className="chat__timestamp">{new Date().toString()}</span>
                </p>
                <p className="chat_message chat__reciever">
                    <span className="chat__name"> Bipin</span>
                    This is message
                    <span className="chat__timestamp">{new Date().toString()}</span>
                </p>
                <p className="chat_message">
                    <span className="chat__name"> Bipin</span>
                    This is message
                    <span className="chat__timestamp">{new Date().toString()}</span>
                </p>
                <p className="chat_message">
                    <span className="chat__name"> Bipin</span>
                    This is message
                    <span className="chat__timestamp">{new Date().toString()}</span>
                </p>
                <p className="chat_message chat__reciever">
                    <span className="chat__name"> Bipin</span>
                    This is message
                    <span className="chat__timestamp chat__reciever">{new Date().toString()}</span>
                </p>
                <p className="chat_message">
                    <span className="chat__name"> Bipin</span>
                    This is message
                    <span className="chat__timestamp chat__reciever">{new Date().toString()}</span>
                </p>
                <p className="chat_message">
                    <span className="chat__name"> Bipin</span>
                    This is message
                    <span className="chat__timestamp">{new Date().toString()}</span>
                </p>
                <p className="chat_message chat__reciever">
                    <span className="chat__name"> Bipin</span>
                    This is message
                    <span className="chat__timestamp">{new Date().toString()}</span>
                </p>
                <p className="chat_message">
                    <span className="chat__name"> Bipin</span>
                    This is message
                    <span className="chat__timestamp">{new Date().toString()}</span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input placeholder="Type a message" type="text" />
                    <button type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
