
console.log("CyberGuard is ready!");

const analyzeButton = document.getElementById("analyze-button");

analyzeButton.addEventListener("click", function () {
  const message = document.getElementById("message-input").value.trim();
  const result = document.getElementById("phishing-result");

  if (message === "") {
    result.textContent = "Please enter a sample message first.";
    return;
  }

  result.textContent =
    "Message received! The phishing analysis will be added next.";
});
