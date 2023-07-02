import React from "react"
import "../css/message-sending-form.css"

class MessageSendingForm extends React.Component {

    render() {
        return (
            <form className="message__send__form" id="message-send-form">

                <div class="form-group">
                    <textarea className="form-control" id="messageInputArea" rows="2" placeholder="Your message..." />
                </div>

                <button type="button" id="btn-send-message" className="btn btn-primary">Send</button>
            </form>
        )
    }

}

export default MessageSendingForm