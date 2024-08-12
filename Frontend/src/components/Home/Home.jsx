import React, { useState, useEffect } from 'react';
import FlashcardList from '../FlashcardList/FlashcardList';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import './Home.css';


function App() {
    const [flashcards, setFlashcards] = useState([]);

    useEffect(() => {
        // Fetch flashcards from the backend
        fetch('http://localhost:5000/flashcards')
            .then(response => response.json())
            .then(data => setFlashcards(data))
            .catch(error => console.error('Error fetching flashcards:', error));
    }, []);

    const updateFlashcard = (id, updatedFlashcard) => {
        fetch(`http://localhost:5000/flashcards/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedFlashcard),
        })
        .then(() => {
            setFlashcards(flashcards.map(flashcard => 
                flashcard.id === id ? { ...flashcard, ...updatedFlashcard } : flashcard
            ));
        })
        .catch(error => console.error('Error updating flashcard:', error));
    };

    const deleteFlashcard = (id) => {
        fetch(`http://localhost:5000/flashcards/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            setFlashcards(flashcards.filter(flashcard => flashcard.id !== id));
        })
        .catch(error => console.error('Error deleting flashcard:', error));
    };

    return (
        <>
        <div className="navbar">
        <h1>Riddle It Out</h1>
            <div >
            <Link to="/add">
                <AddIcon className="addbtn"/>
            </Link>
            </div>
        </div>
        <div>
            
            
            <FlashcardList 
                flashcards={flashcards} 
                updateFlashcard={updateFlashcard} 
                deleteFlashcard={deleteFlashcard} 
            />
        </div>
        </>
    );
}

export default App;
