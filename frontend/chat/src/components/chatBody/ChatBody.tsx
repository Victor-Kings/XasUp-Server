import { ChatList } from "../chatList/ChatList";
import { ChatContent } from "../chatContent/ChatContent";
import { Container } from "./styles";

export function ChatBody () {
    return (
      <Container>
        <ChatList />
        <ChatContent />
      </Container>
    );
}
