onclick addEventListener

document.getElementById('btn-scissors').addEventListener('click', funScissors);

function funScissors() {
  document.querySelector('.player').className = 'scissors'
}
