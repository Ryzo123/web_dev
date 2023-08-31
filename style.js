document.addEventListener("DOMContentLoaded", function () {
    const profileArrow = document.getElementById("profile-arrow");
    const profileMenu = document.getElementById("profile-menu");
  
    profileArrow.addEventListener("click", function () {
        console.log("Arrow clicked");
        profileMenu.classList.toggle("active");
      });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search input");
    const voiceSearchButton = document.getElementById("voice-search");
  
    // Check if the browser supports the Web Speech API
    if ("webkitSpeechRecognition" in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US"; // Specify the language
  
      recognition.onresult = function (event) {
        const result = event.results[0][0].transcript;
        searchInput.value = result;
      };
  
      voiceSearchButton.addEventListener("click", function () {
        recognition.start();
      });
    } else {
      // If Web Speech API is not supported
      voiceSearchButton.disabled = true;
      voiceSearchButton.title = "Voice search not supported";
    }
  });
  