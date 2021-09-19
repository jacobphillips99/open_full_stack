import React from 'react'

const NoteNotification = ({message}) => {
    if (message === null) {
        return null
    }
    return (
        <div className="error">
            {message}
        </div>
    )
}

export default NoteNotification