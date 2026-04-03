import React, { useActionState, useRef } from 'react';
import { addFeedback, Feedback } from '../actions/feedback';

// Form to submit feedback with state handling
export default function FeedbackForm({ onAdd }: { onAdd: (f: Feedback) => void }) {
  const formRef = useRef<HTMLFormElement>(null);

  // useActionState handles server-side form logic and errors
  const [state, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      const result = await addFeedback(prevState, formData);
      if (result.success) {
        onAdd(result.newFeedback);
        formRef.current?.reset();
      }
      return result;
    },
    null
  );

  return (
    <form action={formAction} ref={formRef} className="feedback-form">
      <h3>Submit Your Review</h3>

      <div className="input-group">
        <label>Your Name:</label>
        <input type="text" name="name" placeholder="Enter your name" required />
      </div>
      
      <div className="input-group">
        <label>Rate Us (1-5):</label>
        <select name="rating" required>
          <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
          <option value="4">⭐⭐⭐⭐ (Good)</option>
          <option value="3">⭐⭐⭐ (Average)</option>
          <option value="2">⭐⭐ (Poor)</option>
          <option value="1">⭐ (Bad)</option>
        </select>
      </div>

      <div className="input-group">
        <label>Your Feedback:</label>
        <textarea name="comment" placeholder="Write something..." required />
      </div>

      {/* Button changes text while submitting */}
      <button type="submit" disabled={isPending}>
        {isPending ? 'Sending...' : 'Submit Feedback'}
      </button>

      {/* Show error if the submission fails */}
      {state?.error && <p className="error-message">{state.error}</p>}
    </form>
  );
}
