import React, {useReducer} from 'react';
import styled from "styled-components"

const MessageComp = styled.div`

    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New';
    background-color: #0A253C;
    color: #00D924;
    padding: 20px;
    margin: 20px 0;
    border-radius: var(--radius);
    font-size:0.7em;
    overflow: scroll;

`


// `StatusMessages` is a helper component for displaying messages while in
// development. This has no impact on your integration and can be deleted.
const StatusMessages = ({messages}) =>
  messages.length ? (
    <MessageComp id="messages" role="alert">
      {messages.map((m, i) => (
        <div key={i}>{maybeLink(m)}</div>
      ))}
    </MessageComp>
  ) : (
    ''
  );

const maybeLink = (m) => {
  const piDashboardBase = 'https://dashboard.stripe.com/test/payments';
  return (
    <span dangerouslySetInnerHTML={{__html: m.replace(
      /(pi_(\S*)\b)/g,
      `<a href="${piDashboardBase}/$1" target="_blank">$1</a>`
    )}}></span>
  )
};

// Small hook for adding a message to a list of messages.
const useMessages = () => {
    // helper for displaying status messages.
    return useReducer((messages, message) => { return [...messages, message]; }, [""]);
  };



export default StatusMessages;
export {useMessages};