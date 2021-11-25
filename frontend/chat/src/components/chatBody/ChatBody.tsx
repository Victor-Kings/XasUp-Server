import { ChatList } from "../chatList/ChatList";
import { ChatContent } from "../chatContent/ChatContent";
import { useState } from "react";
import {Algo} from "./styles"

interface IProps {
  id: number;
  name: string;
  isOnline: boolean;
}

export function ChatBody () {
 const [user, setUser] = useState<IProps | null>(null);
    return (
      <Algo>
        <ChatList set={setUser}/>
        <ChatContent get={user}/>
      </Algo>
    );
}
