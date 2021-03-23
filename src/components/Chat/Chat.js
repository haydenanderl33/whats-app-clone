import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic"
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import db from "../firebase"
import "./Chat.css";

const Chat = () => {
  const [input, setInput] = useState("")
  const [seed, setSeed] = useState(0);
  const { roomId } = useParams()
  const [roomName, setRoomName] = useState("")

  const sendMessage = (e) => {
    e.preventDefault()

    console.log('You typed, >>>', input)
  }
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  useEffect(() => {
    if(roomId){
      db.collection("rooms").doc(roomId).onSnapshot((snapshot) => (
        setRoomName(snapshot.data().name)
      ))
    }
  },[roomId])


  return (
    <div className="chat">
      <div className="chat__header">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p> Last seen at ...</p>
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
          <p className={`chat__message ${false && "chat__receiver"}`}>
            <span className="chat__name">Hayden</span>
            Hey guys!
          <span className="chat__timestamp">7:00pm</span>
          </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
          value={input}
          type="text" placeholder="Type your message"
          onChange={(e) => setInput(e.target.value)} />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
