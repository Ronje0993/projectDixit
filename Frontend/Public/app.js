document.getElementById('landing-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name-input').value;
    const messageElement = document.getElementById('message');
    messageElement.textContent = `Success ${name}`;
  });
  