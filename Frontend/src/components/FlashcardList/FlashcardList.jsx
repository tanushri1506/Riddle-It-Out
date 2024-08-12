import React, { useState } from 'react';
import Flashcard from '../Flashcard/Flashcard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './FlashcardList.css'

function FlashcardList({ flashcards, updateFlashcard, deleteFlashcard }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < flashcards.length - 1 ? prevIndex + 1 : 0
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : flashcards.length - 1
        );
    };

    return (
        <div>
            {flashcards.length > 0 ? (
                <>
                <div className='cardlist'>
                <ArrowBackIosIcon className='arrows' onClick={handlePrevious}/>
                    <Flashcard
                        flashcard={flashcards[currentIndex]}
                        updateFlashcard={updateFlashcard}
                        deleteFlashcard={deleteFlashcard}
                    />
                    
                        
                        <ArrowForwardIosIcon className='arrows' onClick={handleNext}/>
                    </div>
                </>
            ) : (
                <p>No Flashcards :( </p>
            )}
        </div>
    );
}

export default FlashcardList;
