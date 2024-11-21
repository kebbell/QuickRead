// Select elements
const summarizeBtn = document.getElementById('summarizeBtn');
const inputText = document.getElementById('inputText');
const summaryText = document.getElementById('summaryText');
const saveBtn = document.getElementById('saveBtn');
const copyBtn = document.getElementById('copyBtn');
const shareBtn = document.getElementById('shareBtn');

// Mock summarization logic
summarizeBtn.addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) {
    summaryText.innerText = "Please enter text or URL to summarize.";
    return;
  }

  // Simulate summarization (replace with Summarization API later)
  summaryText.innerText = `Summary: ${text.substring(0, 100)}...`;
});

// Save the summary
saveBtn.addEventListener('click', () => {
  const summary = summaryText.innerText;
  if (!summary || summary === 'No summary available.') {
    alert('No summary to save!');
    return;
  }

  const blob = new Blob([summary], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'summary.txt';
  link.click();
  URL.revokeObjectURL(url);
});

// Copy the summary to clipboard
copyBtn.addEventListener('click', async () => {
  const summary = summaryText.innerText;
  if (!summary || summary === 'No summary available.') {
    alert('No summary to copy!');
    return;
  }

  try {
    await navigator.clipboard.writeText(summary);
    alert('Summary copied to clipboard!');
  } catch (err) {
    console.error('Error copying summary:', err);
    alert('Failed to copy summary.');
  }
});

// Share the summary
shareBtn.addEventListener('click', async () => {
  const summary = summaryText.innerText;
  if (!summary || summary === 'No summary available.') {
    alert('No summary to share!');
    return;
  }

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'QuickRead Summary',
        text: summary,
      });
      alert('Summary shared successfully!');
    } catch (err) {
      console.error('Error sharing summary:', err);
      alert('Failed to share summary.');
    }
  } else {
    alert('Sharing not supported on this device.');
  }
});



