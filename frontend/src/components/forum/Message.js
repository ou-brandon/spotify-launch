

const Message = (props) => {
    const {msg} = props;

    return (
    <>
        <p>{msg.displayName}: {msg.text}</p>
    </>
    )
}

export default Message;