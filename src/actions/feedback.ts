// Interface for the feedback data structure
export interface Feedback {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

// Simulated server action to handle feedback submission
export async function addFeedback(prevState: any, formData: FormData) {
  // Wait 1 second to simulate a database call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Extract name, rating, and comment from form data
  const name = formData.get("name");
  const rating = formData.get("rating");
  const comment = formData.get("comment");

  // Validate the inputs are provided
  if (!name || !rating || !comment) {
    return { error: "Name, rating, and comment are required." };
  }

  // Return the new feedback object on success
  return {
    success: true,
    newFeedback: {
      id: Date.now(),
      name: String(name),
      rating: Number(rating),
      comment: String(comment),
    },
  };
}
