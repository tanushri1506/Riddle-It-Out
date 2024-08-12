import React, { useState } from 'react'

const UpdateCard = ({ flashcard, updateFlashcard, setIsEditing }) => {
    const [question, setQuestion] = useState(flashcard.question);
    const [answer, setAnswer] = useState(flashcard.answer);

    const handleUpdate = () => {
        updateFlashcard(flashcard.id, { question, answer });
        setIsEditing(false);
    };

    return (
        <div>
            <input 
                type="text" 
                value={question} 
                onChange={(e) => setQuestion(e.target.value)} 
            />
            <input 
                type="text" 
                value={answer} 
                onChange={(e) => setAnswer(e.target.value)} 
            />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}
export default UpdateCard
