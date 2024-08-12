import React, { useState, useEffect } from 'react';
import Card from '../Cards/Cards';
import UpdateCard from '../UpdateCard/UpdateCard';
import './Flashcard.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Flashcard({ flashcard, updateFlashcard, deleteFlashcard }) {
    const [flipped, setFlipped] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setFlipped(false);
    }, [flashcard.id]);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className='flashcards'>
            {isEditing ? (
                <UpdateCard 
                    flashcard={flashcard} 
                    updateFlashcard={updateFlashcard} 
                    setIsEditing={setIsEditing} 
                />
            ) : (
                <div onClick={handleFlip}>
                    <Card text={flipped ? flashcard.answer : flashcard.question} flipped={flipped} />
                </div>
            )}
            <div className="editbtn">
            <EditIcon className='edit' onClick={() => setIsEditing(true)}/>
            <DeleteIcon className='del' onClick={() => deleteFlashcard(flashcard.id)}/>
            </div>
        </div>
    );
}

export default Flashcard;
