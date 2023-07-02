import React from "react"
import "../css/message.css"

class UserMessage extends React.Component {
    render() {
        return (
            <div className={"message__outer " + this.props.type}>
                
                <div className={"message__sender " + this.props.type}>{this.props.sender}</div>

                <div className={"message__inner " + this.props.type}>
                    <span />
                    <div className="message__text">{this.props.text}</div>
                    <span />
                </div>

            </div>
        )
    }

}

export default UserMessage