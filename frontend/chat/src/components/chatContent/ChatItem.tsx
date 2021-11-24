import { Container, ItemContent, ChatMessage, ChatMeta } from "./styles";

export function ChatItem (message: string) {
    return (
      <Container
        style={{ animationDelay: `0.8s` }}
      >
        <ItemContent>
          <ChatMessage >message</ChatMessage>
          <ChatMeta>
            <span>16 mins ago</span>
            <span>Seen 1.03PM</span>
          </ChatMeta>
        </ItemContent>
      </Container>
    );
}
