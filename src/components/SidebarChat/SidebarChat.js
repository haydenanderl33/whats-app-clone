import { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "../firebase"
import {Link} from "react-router-dom"
const SidebarChat = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
    // Cleaner way ^^

    // const seed = Math.floor(Math.random() * 5000)

    // setSeed(seed)
  }, []);

  const createChat = () => {
      const roomName = prompt('Please enter name of the room')

      if(roomName){
        db.collection("rooms").add({
          name: roomName,
        })
      }
  }
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

      <div className="sidebarChat__info">
        <h2> {name} </h2>
        <p> Last Message </p>
      </div>
    </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add New Chat</h2>
      </div>
  )
};

export default SidebarChat;
