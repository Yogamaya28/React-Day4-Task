import React from 'react';
import { Feedback } from '../actions/feedback';

// This component shows all the feedbacks in a list
export default function FeedbackList({ feedbacks }: { feedbacks: Feedback[] }) {
  // If no feedback, show an empty state message
  if (feedbacks.length === 0) {
    return <p className="empty-message">No feedback yet. Be the first!</p>;
  }

  return (
    <div className="feedback-list">
      {/* Map through each feedback item to display a card */}
      {feedbacks.map((f) => (
        <div key={f.id} className="feedback-card">
          <div className="feedback-header">
            <span className="user-name">{f.name}</span>
            <span className="rating-pill">⭐ {f.rating}</span>
          </div>
          <p className="feedback-comment">{f.comment}</p>
        </div>
      ))}
    </div>
  );
}
