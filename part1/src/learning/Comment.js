const Avatar = (props) => {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.userName}
        />
    );
}

const UserInfo = (props) => {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.userName}
            </div>
        </div>
    );
}

const Comment = (props) => {
    return (
        <div className="Comment">
            <UserInfo user={props.authorInfo} />
            <div className="Comment-text">
                {props.commentText}
            </div>
            <div className="Comment-date">
                {props.commentDate.toString()}
            </div>
        </div>
    );
}

export default Comment

