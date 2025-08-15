// const feedbackData = JSON.parse(localStorage.getItem('feedbackData')) || [];
// const feedbackList = document.getElementById('feedback-list');
// const charCountDisplay = document.getElementById('char-count');
// const moodBoard = document.getElementById('mood-board');

// // Theme Toggler
// document.getElementById('theme-toggle').addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });

// // Color Picker
// document.getElementById('color-picker').addEventListener('input', (e) => {
//   document.documentElement.style.setProperty('--primary-color', e.target.value);
// });

// // Character Count
// document.getElementById('feedback').addEventListener('input', function () {
//   const remaining = 200 - this.value.length;
//   charCountDisplay.textContent = ${remaining} characters remaining;
//   charCountDisplay.style.color = remaining < 0 ? 'red' : 'black';
// });

// // Submit Feedback
// document.getElementById('feedback-form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   const isAnonymous = document.getElementById('anonymous-checkbox').checked;
//   const name = isAnonymous ? 'Anonymous' : document.getElementById('name').value || 'Anonymous';
//   const feedback = document.getElementById('feedback').value.trim();

//   if (feedback.length < 10) {
//     alert('Feedback must be at least 10 characters!');
//     return;
//   }

//   const newFeedback = {
//     name,
//     feedback,
//     timestamp: new Date().toLocaleString(),
//     likes: 0
//   };

//   feedbackData.push(newFeedback);
//   localStorage.setItem('feedbackData', JSON.stringify(feedbackData));
//   renderFeedback();
//   showNotification(name);
//   updateMoodBoard();
//   launchConfetti();
// });

// // Notification
// function showNotification(name) {
//   const notification = document.createElement('div');
//   notification.classList.add('notification');
//   notification.textContent = 🎉 New feedback from ${name};
//   document.getElementById('notifications').appendChild(notification);
//   setTimeout(() => notification.remove(), 3000);
// }

// // Confetti Effect
// function launchConfetti() {
//   confetti({
//     particleCount: 100,
//     spread: 70,
//     origin: { y: 0.6 }
//   });
// }

// // Mood Board
// function updateMoodBoard() {
//   const positiveCount = feedbackData.filter(f => f.feedback.includes('good') || f.feedback.includes('excellent')).length;
//   const negativeCount = feedbackData.filter(f => f.feedback.includes('bad') || f.feedback.includes('terrible')).length;
//   const neutralCount = feedbackData.length - positiveCount - negativeCount;

//   moodBoard.innerHTML = 
//     🟢 Positive: ${'😊'.repeat(positiveCount)}
//     🟡 Neutral: ${'😐'.repeat(neutralCount)}
//     🔴 Negative: ${'😞'.repeat(negativeCount)}
//   ;

//   renderChart(positiveCount, negativeCount, neutralCount);
// }

// // Render Feedback
// function renderFeedback() {
//   feedbackList.innerHTML = '';
//   feedbackData.forEach((item, index) => {
//     const feedbackItem = document.createElement('div');
//     feedbackItem.classList.add('feedback-item');
//     feedbackItem.innerHTML = 
//       <strong>${item.name}</strong>: ${item.feedback} <><br /><small>${item.timestamp}</small></>
//     ;
//     feedbackList.appendChild(feedbackItem);
//   });
// }

// renderFeedback();
// updateMoodBoard();








// function startVoiceInput() {
//     if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
//       alert('Your browser does not support speech recognition. Please use Chrome or Edge.');
//       return;
//     }
  
//     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognition.lang = 'en-US'; // Adjust language if needed
//     recognition.start();
  
//     document.getElementById('voice-btn').textContent = '🎤 Listening...';
  
//     recognition.onresult = (event) => {
//       const feedback = event.results[0][0].transcript;
//       const feedbackField = document.getElementById('feedback');
//       feedbackField.value += feedback; // Append the voice result to the existing text
//       updateCharacterCount();
//       document.getElementById('voice-btn').textContent = '🎤 Speak Feedback';
//     };
  
//     recognition.onerror = (error) => {
//       console.error('Speech recognition error:', error);
//       alert('Speech recognition failed. Please try again.');
//       document.getElementById('voice-btn').textContent = '🎤 Speak Feedback';
//     };
  
//     recognition.onend = () => {
//       document.getElementById('voice-btn').textContent = '🎤 Speak Feedback';
//     };
//   }
  
//   // Character Count Update
//   function updateCharacterCount() {
//     const feedbackField = document.getElementById('feedback');
//     const charCountDisplay = document.getElementById('char-count');
//     const remainingChars = 200 - feedbackField.value.length;
//     charCountDisplay.textContent = ${remainingChars} characters remaining;
//   }
  


const feedbackData = JSON.parse(localStorage.getItem('feedbackData')) || [];
const feedbackList = document.getElementById('feedback-list');
const charCountDisplay = document.getElementById('char-count');
const moodBoard = document.getElementById('mood-board');

// Theme Toggler
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Color Picker
document.getElementById('color-picker').addEventListener('input', (e) => {
  document.documentElement.style.setProperty('--primary-color', e.target.value);
});

// Character Count
document.getElementById('feedback').addEventListener('input', function () {
  const remaining = 200 - this.value.length;
  charCountDisplay.textContent = `${remaining} characters remaining`;
  charCountDisplay.style.color = remaining < 0 ? 'red' : 'black';
});

// Submit Feedback
document.getElementById('feedback-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const isAnonymous = document.getElementById('anonymous-checkbox').checked;
  const name = isAnonymous ? 'Anonymous' : document.getElementById('name').value || 'Anonymous';
  const feedback = document.getElementById('feedback').value.trim();

  if (feedback.length < 10) {
    alert('Feedback must be at least 10 characters!');
    return;
  }

  const newFeedback = {
    name,
    feedback,
    timestamp: new Date().toLocaleString(),
    likes: 0
  };

  feedbackData.push(newFeedback);
  localStorage.setItem('feedbackData', JSON.stringify(feedbackData));
  renderFeedback();
  showNotification(name);
  updateMoodBoard();
  launchConfetti();
});

// Notification
function showNotification(name) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent =` 🎉 New feedback from ${name}`;
  document.getElementById('notifications').appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

// Confetti Effect
function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Mood Board
function updateMoodBoard() {
  const positiveCount = feedbackData.filter(f => f.feedback.includes('good') || f.feedback.includes('excellent')).length;
  const negativeCount = feedbackData.filter(f => f.feedback.includes('bad') || f.feedback.includes('terrible')).length;
  const neutralCount = feedbackData.length - positiveCount - negativeCount;

  moodBoard.innerHTML =` 
    🟢 Positive: ${'😊'.repeat(positiveCount)}
    🟡 Neutral: ${'😐'.repeat(neutralCount)}
    🔴 Negative: ${'😞'.repeat(negativeCount)}
  ;`

  renderChart(positiveCount, negativeCount, neutralCount);
}

// // Render Feedback
// function renderFeedback() {
//   feedbackList.innerHTML = '';
//   feedbackData.forEach((item, index) => {
//     const feedbackItem = document.createElement('div');
//     feedbackItem.classList.add('feedback-item');
//     feedbackItem.innerHTML = `
//       <strong>${item.name}</strong>: ${item.feedback} <br />
//       <small>${item.timestamp}</small>
//     ;`
//     feedbackList.appendChild(feedbackItem);
//   });
// }

// renderFeedback();
// updateMoodBoard();









// Render Feedback with Edit and Delete Buttons
function renderFeedback() {
  feedbackList.innerHTML = '';
  feedbackData.forEach((item, index) => {
    const feedbackItem = document.createElement('div');
    feedbackItem.classList.add('feedback-item');
    feedbackItem.innerHTML = `
      <strong>${item.name}</strong>: <span id="feedback-text-${index}">${item.feedback}</span> <br />
      <small>${item.timestamp}</small>
      <br />
      <button onclick="editFeedback(${index})">✏️ Edit</button>
      <button onclick="deleteFeedback(${index})">🗑️ Delete</button>
    `;
    feedbackList.appendChild(feedbackItem);
  });
}

// Edit Feedback
function editFeedback(index) {
  const feedbackText = document.getElementById(`feedback-text-${index}`);
  const newText = prompt('Edit your feedback:', feedbackData[index].feedback);

  if (newText === null || newText.trim() === '') {
    alert('Feedback cannot be empty!');
    return;
  }

  feedbackData[index].feedback = newText.trim();
  feedbackData[index].timestamp = new Date().toLocaleString();
  localStorage.setItem('feedbackData', JSON.stringify(feedbackData));

  showNotification(feedbackData[index].name + " edited their feedback!");
  renderFeedback();
  updateMoodBoard();
}

// Delete Feedback
function deleteFeedback(index) {
  if (confirm('Are you sure you want to delete this feedback?')) {
    const deletedName = feedbackData[index].name;
    feedbackData.splice(index, 1);
    localStorage.setItem('feedbackData', JSON.stringify(feedbackData));

    showNotification(deletedName + " deleted their feedback.");
    renderFeedback();
    updateMoodBoard();
  }
}








function startVoiceInput() {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Your browser does not support speech recognition. Please use Chrome or Edge.');
      return;
    }
  
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US'; // Adjust language if needed
    recognition.start();
  
    document.getElementById('voice-btn').textContent = '🎤 Listening...';
  
    recognition.onresult = (event) => {
      const feedback = event.results[0][0].transcript;
      const feedbackField = document.getElementById('feedback');
      feedbackField.value += feedback; // Append the voice result to the existing text
      updateCharacterCount();
      document.getElementById('voice-btn').textContent = '🎤 Speak Feedback';
    };
  
    recognition.onerror = (error) => {
      console.error('Speech recognition error:', error);
      alert('Speech recognition failed. Please try again.');
      document.getElementById('voice-btn').textContent = '🎤 Speak Feedback';
    };
  
    recognition.onend = () => {
      document.getElementById('voice-btn').textContent = '🎤 Speak Feedback';
    };
  }
  
  // Character Count Update
  function updateCharacterCount() {
    const feedbackField = document.getElementById('feedback');
    const charCountDisplay = document.getElementById('char-count');
    const remainingChars = 200 - feedbackField.value.length;
    charCountDisplay.textContent =` ${remainingChars} characters remaining`;
  }
  




  





  
