import React from 'react'
import '../App.css';

// Dummy Data
let dummyData = [
  {
    senderId: 'janedoe',
    text: 'Running late.... Be there soon.'
  },
  {
    senderId: 'rainforest2020',
    text: 'How was your day?'
  },
  {
    senderId: 'coderunner',
    text: 'Coding fire... Hit you back later.'
  }
]
export default class MessageList extends React.Component {
  render() {
    return (
      <div className='message-list'>
          {dummyData.map((message, index) => {
             return (
               <div key={index} className='message'>
                <div className='message-username'>{message.senderId}</div>
                <div className='message-text'>{message.text}</div>
              </div>
             )
          })}
      </div>
    )
  }
}

