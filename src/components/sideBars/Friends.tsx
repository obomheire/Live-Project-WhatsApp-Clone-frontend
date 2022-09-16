import React from 'react'
import { formatDistance, isYesterday, isThisSecond, formatRelative, subDays, sub, isToday} from 'date-fns'

import CurrentUserContext, { UserType } from '../../contextAPI/userContext'

// const format = require('date-fns/format')
// const isToday = require('date-fns/isToday')
// const isYesterday = require('date-fns/isYesterday')

// function formatDate(d) {
//   if (isToday(d)) {
//     return `Today at ${format(d, 'kk:mm')}`
//   }

//   if (isYesterday(d)) {
//     return `Yesterday at ${format(d, 'kk:mm')}`
//   }

//   return format(d, 'dd/MM/yyyy')
// }
const Menu: React.FC<{ friend: any[]; setUserId: (value: string) => void }> = (
  props
) => {
  const { messages } = React.useContext(CurrentUserContext)
 let lastSeen: any[] = []

 let formatTime = (isoTime: string) => {
  let isoDate = new Date(isoTime)
  let date = isoDate.toLocaleTimeString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', })
  let dateGMT: any = new Date(isoTime).toString()
  let dateNow = new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit' })
  let dateChat = isoDate.toLocaleString([], { hour: '2-digit', minute: '2-digit', })


  // if (isYesterday(isoDate)) {
  //  return 'Yesterday'
  // } else if (isToday(isoDate) && isThisSecond(isoDate)) {
  //  return 'now'
  // } else if (isToday(isoDate) && !isThisSecond(isoDate)) {
  //   return date.substring(11)
  // } else {
  //   return date.substring(0, 9)
  // }

switch (true) {
  case isYesterday(isoDate):
    return 'Yesterday'
    break
  // case (dateNow === dateChat ):
  //   return 'now'
  //   break
  case isToday(isoDate):
    return date.substring(11)
    break
  default:
    return date.substring(0, 9)
}

 }
 
  return (
    <React.Fragment>
      {props.friend?.length > 0 ? (
        props.friend.map((data: any) => {
          if (messages) {
           for (const message of messages) {
             if (message.receiverId == data.userId) {
              lastSeen.push(message)
              }
            }
          }
          return (
            <div key={data._id} className='messagetBox'>
              <div className='messageContainer'>
                <div className='message'>
                  <img
                    className='propic'
                    src={data.profilePic}
                    alt='propic'
                    width='48'
                    height='48'
                  />
                </div>
                <div
                  onClick={() => props.setUserId(data.userId)}
                  className='messagebody'
                >
                  <span className='displayName'> {data.fullName}</span>
                  <p className='messageText'>
                    {lastSeen === []
                      ? ''
                      : lastSeen[lastSeen.length - 1]?.message}
                  </p>
                </div>
                <div className='textfine'>
                  <span className='messageTime'>
                    {lastSeen === [] ? '' : formatTime('2022-02-20T18:05:35.421Z')}
                  </span>
                  <p className='others'></p>
                </div>
              </div>
            </div>
          )
        })
      ) : (
        <div className='NotFound'>No Friend Found</div>
      )}
    </React.Fragment>
  )
}
export default Menu
