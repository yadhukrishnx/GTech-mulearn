function myf(){
    alert("Hello");
}

function showAlert() {
    alert('Welcome to my Google . This is My Google So Only Search                      >> yadhukrishnx             ');
  }

  // Attach the showAlert function to the window.onload event
  window.onload = showAlert;

function checkAndRedirect() {
    // Get the value entered in the input field
    var inputValue = document.getElementById('inputbox').value;

    // Your name (replace 'Your Name' with your actual name)
    var yourName = 'yadhukrishnx';

    // Check if the entered text matches your name
    if (inputValue.toLowerCase() === yourName.toLowerCase()) {
      // Redirect to your portfolio (replace 'your-portfolio-url' with your actual portfolio URL)
      window.location.href = 'https://yadhukrishna-n-p.firebaseapp.com/';
    }
  }