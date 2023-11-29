
const form = document.getElementById('entry');
const nameInput = document.getElementById('name');
const participantsList = document.getElementById('participants-list');
const drawButton = document.getElementById('draw-button');
const resetButton = document.getElementById('reset-button');
const winnerDisplay = document.getElementById('winner-display');

const participants = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();

  participants.push(name);

  participantsList.innerHTML += `<p>${name}</p>`;

  nameInput.value = '';
});

drawButton.addEventListener('click', function() {
  if (participants.length > 0) {
    const winnerIndex = Math.floor(Math.random() * participants.length);
    const winner = participants[winnerIndex];

    winnerDisplay.innerHTML = `<p>🎉 Winner: ${winner} 🎉 </p>`;
  }
});

resetButton.addEventListener('click', function() {
  winnerDisplay.innerHTML = ''; 
  participantsList.innerHTML = '';
  participants.length = 0;
});
