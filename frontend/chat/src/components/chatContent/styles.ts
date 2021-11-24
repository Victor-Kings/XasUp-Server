import styled from "styled-components";

export const Container  = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  transform: scale(0);
  transform-origin: right;
  animation-name: showIn;
  animation-duration: 0.2s; /* or: Xms */
  animation-iteration-count: 1;
  animation-direction: normal; /* or: normal */
  animation-timing-function: cubic-bezier(
    0.88,
    0.19,
    0.37,
    1.11
  ); /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
  animation-fill-mode: both; /* or: backwards, both, none */
  animation-delay: 0.2s; /* or: Xms */
`
export const ItemContent = styled.div`
    background-color: #4462ff;
    color: #fff;
    padding: 15px;
    border-radius: 10px 10px 0 10px;
    max-width: 50%;
    min-width: 215px;
`

export const ChatMessage = styled.div`
  user-select: none;

`

export const ChatMeta = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  color: #8693d3;
  user-select: none;
`