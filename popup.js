// Select elements
const summarizeBtn = document.getElementById('summarizeBtn');
const inputText = document.getElementById('inputText');
const summaryText = document.getElementById('summaryText');

// Summarize text on button click
summarizeBtn.addEventListener('click', async () => {
  const textToSummarize = inputText.value;

  // Check if input is valid
  if (!textToSummarize.trim()) {
    alert('Please enter some text or a URL to summarize.');
    return;
  }

  try {
    // Call Chrome's built-in Summarization API
    const response = await chrome.ai.summarization.summarize({
      text: textToSummarize
    });

    // Display the summary
    if (response && response.summary) {
      summaryText.innerText = response.summary;
    } else {
      summaryText.innerText = 'No summary available. Try a different input.';
    }
  } catch (error) {
    console.error('Error during summarization:', error);
    summaryText.innerText = 'Something went wrong. Please try again.';
  }
});
