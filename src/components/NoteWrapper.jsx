import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const NoteWrapper = () => {
    return (
        <div className='noteWrapper'>
            <div className="note">
                <h2>Title</h2>
                <p>Discription</p>
            </div>
            <Button className='deleteNoteBtn'><DeleteIcon/></Button>
        </div>
    )
}

export default NoteWrapper