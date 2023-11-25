import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const NoteWrapper = (props) => {
    const handleClick = () => {
        props.deleteNoteFunc(props.id)
    }

    return (
        <div className='noteWrapper' id={props.id}>
            <div className="note">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <Button className='deleteNoteBtn' onClick={handleClick}><DeleteIcon /></Button>
        </div>
    )
}

export default NoteWrapper