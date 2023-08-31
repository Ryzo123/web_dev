const loginForm = document.getElementById('login-form');
const detailsContainer = document.getElementById('details-container');
const showPasswordCheckbox = document.getElementById('show-password');
const passwordInput = loginForm.querySelector('input[type="password"]');



loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = loginForm.username.value;
  const password = loginForm.password.value;
  
  // Replace 'your-username' and 'your-password' with actual credentials
  if (username === 'admin' && password === 'Aviral2002') {
    showDetails();
  }
});

function showDetails() {
  window.location.href = 'dashboard.html';
}
showPasswordCheckbox.addEventListener('change', function() {
  if (this.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});



