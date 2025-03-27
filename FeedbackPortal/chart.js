// Chart Visualization using Chart.js
let feedbackChart;

function renderChart(positive, negative, neutral) {
  const ctx = document.getElementById('feedbackChart').getContext('2d');

  // Destroy the existing chart if it exists
  if (feedbackChart) {
    feedbackChart.destroy();
  }

  // Create a new chart
  feedbackChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Positive', 'Negative', 'Neutral'],
      datasets: [{
        label: 'Feedback Sentiment Analysis',
        data: [positive, negative, neutral],
        backgroundColor: ['#4caf50', '#f44336', '#ffc107'],
        borderColor: ['#388e3c', '#d32f2f', '#ffa000'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: { 
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      },
      plugins: {
        legend: {
          display: true
        }
      }
    }
  });
}

// Initial call to render chart on page load
updateMoodBoard();







// Mood Board
function updateMoodBoard() {
    const positiveCount = feedbackData.filter(f => f.feedback.includes('good') || f.feedback.includes('excellent')).length;
    const negativeCount = feedbackData.filter(f => f.feedback.includes('bad') || f.feedback.includes('terrible')).length;
    const neutralCount = feedbackData.length - positiveCount - negativeCount;
  
    moodBoard.innerHTML = `
      🟢 Positive:\t<br> ${'😊'.repeat(positiveCount)}<br>
      🟡 Neutral: <br>${'😐'.repeat(neutralCount)}<br>
      🔴 Negative: <br>${'😞'.repeat(negativeCount)}
    `;
    
  
    renderChart(positiveCount, negativeCount, neutralCount);
  }