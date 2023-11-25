import React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = () => {
    return (
        <div className='createNoteContainer'>
            <input type='text' className='inputNoteTitle' placeholder='Title' />
            <textarea type='text' className='inputNoteDisc' placeholder='Discription' />
            <Button className='addNoteBtn'><AddIcon/></Button>
        </div>
    )
}

export default CreateNote