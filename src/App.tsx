import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import { Feedback } from './actions/feedback';
import './index.css';

// The main application for feedback submission
export default function App() {
  // Store the list of feedback items in state
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    { id: 1, name: "Ananya", rating: 5, comment: "I love this app, it's amazing!" },
    { id: 2, name: "Maya", rating: 4, comment: "Great UI, keep it up!" },
  ]);

  // Add new feedback to the top of the list
  const addFeedbackToList = (newFeedback: Feedback) => {
    setFeedbacks((prev) => [newFeedback, ...prev]);
  };

  return (
    <div className="container">
      <header className="page-header">
        <h1>Smart Feedback Dashboard</h1>
        <p>Your feedback helps us improve!</p>
      </header>

      <main className="content">
        {/* Form component for users to type feedback */}
        <section className="form-section">
          <FeedbackForm onAdd={addFeedbackToList} />
        </section>

        {/* List component for displaying all feedback */}
        <section className="list-section">
          <h3>Feedbacks</h3>
          <FeedbackList feedbacks={feedbacks} />
        </section>
      </main>
    </div>
  );
}
