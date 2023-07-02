import React from "react"
import "../css/message-box.css"
import UserMessage from "./UserMessage"
import MessageSendingForm from "./MessageSendingForm"

class MessageBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: this.props.messages,
            viewer: this.props.viewer
        }
    }

    render() {
        if (this.state.messages.length === 0)
            return (
                <div className="messaging__container">
                    <div className="message__box no__messages">
                        <p>No messages</p>
                    </div>
                    <div className="message__form__container">
                        <MessageSendingForm />
                    </div>                    
                </div>
            )

        return (
            <div className="messaging__container">
                <div className="message__box">
                    {
                        this.state.messages.map((message) => (
                            <UserMessage 
                                type={(this.state.viewer === message.sender) ? "sent" : "received"}
                                sender={message.sender} 
                                text={message.text}
                                key={message.id}
                            />
                        ))
                    }
                </div>
                <div className="message__form__container">
                    <MessageSendingForm />
                </div>
            </div>
        )
    }

}

export default MessageBox