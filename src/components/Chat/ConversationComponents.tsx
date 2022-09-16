import { useState, useEffect, useContext } from 'react'
import {
  MessageContainer,
  Message,
  MessageDiv,
  Encrypted,
} from './Conversation.styles'
import encrypted from '../HomeNav/assets/images/encrypted-image/Frame 1995.png'
import CurrentUserContext from '../../contextAPI/userContext'

const ConversationComponents = (props: any) => {
  const { messages, userData } = props
  const [messageList, setMessageList] = useState([])
  const { currentUser } = useContext(CurrentUserContext)

  useEffect(() => {
    setMessageList(messages)
  }, [messages])

  return (
    <>
      <MessageContainer>
        <Encrypted>
          <img className='encrypted' src={encrypted} alt='encrypted message' />
        </Encrypted>
        {messageList.map((messageData: any) => {
          if (
            messageData.senderId === currentUser.id &&
            messageData.receiverId === userData.userId
          )
            return (
              <MessageDiv isSender={messageData.senderId !== userData.userId}>
                <Message isSender={messageData.senderId !== userData.userId}>
                  {messageData.message}
                </Message>
              </MessageDiv>
            )
          if (messageData.receiverId === currentUser.id) {
            if (
              messageData.receiverId !== userData.userId &&
              messageData.senderId !== userData.userId
            )
              return <div></div>
            else
              return (
                <MessageDiv isSender={messageData.senderId !== userData.userId}>
                  <Message isSender={messageData.senderId !== userData.userId}>
                    {messageData.message}
                  </Message>
                </MessageDiv>
              )
          }
          if (
            messageData.receiverId !== userData.userId &&
            messageData.receiverId === currentUser.id
          )
            return (
              <MessageDiv isSender={messageData.senderId !== userData.userId}>
                <Message isSender={messageData.senderId !== userData.userId}>
                  {messageData.message}
                </Message>
              </MessageDiv>
            )
        })}
      </MessageContainer>
    </>
  )
}
export default ConversationComponents
