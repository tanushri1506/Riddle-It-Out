import React from 'react'
import FlashcardForm from '../FlashcardForm/FlashcardForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCard = () => {
    const navigate=useNavigate();
    const addFlashcard = async (newFlashcard) => {
        try {
            await axios.post('http://localhost:5000/flashcards', newFlashcard);
            navigate("/");
        } catch (error) {
            console.error('Error adding flashcard', error);
        }
    };

  return (
    <div>
      <FlashcardForm addFlashcard={addFlashcard} />
    </div>
  )
}

export default AddCard
