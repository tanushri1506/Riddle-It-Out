import React, { useState } from 'react';
import './FlashcardForm.css'

function FlashcardForm({ addFlashcard }) {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addFlashcard({ question, answer });
        setQuestion('');
        setAnswer('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                type="text"
                value={question}
                placeholder="Question"
                onChange={(e) => setQuestion(e.target.value)}
            />
            <textarea
                type="text"
                value={answer}
                placeholder="Answer"
                onChange={(e) => setAnswer(e.target.value)}
            />
            <button type="submit">Add Flashcard</button>
        </form>
    );
}

export default FlashcardForm;
