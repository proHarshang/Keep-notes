import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    const [Input, setInput] = useState({
        title: '',
        description: ''
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((curVal) => {
            return ({
                ...curVal,
                [name]: value,
            })
        })
    }

    const handleClick = () => {
        if (Input.title !== '' && Input.description !== '') {
            props.addNoteFunc(Input)
        }
    }

    return (
        <div className='createNoteContainer'>
            <input type='text' className='inputNoteTitle' name='title' placeholder='Title' value={Input.title} onChange={handleInput} />
            <textarea type='text' className='inputNoteDisc' name='description' placeholder='Description' value={Input.description} onChange={handleInput} />
            <Button className='addNoteBtn' onClick={handleClick}><AddIcon /></Button>
        </div>
    )
}

export default CreateNote