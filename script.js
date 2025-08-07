
document.getElementById("downloadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const url = document.getElementById("urlInput").value;

  if (url.trim() === "") {
    alert("Please enter a TikTok video URL!");
    return;
  }

  const resultBox = document.getElementById("resultBox");

  // Just simulating a download link for demo purposes
  resultBox.innerHTML = `
    <p>🔗 Your video link:</p>
    <a href="${url}" target="_blank">${url}</a>
    <p style="color:red;">(This is a demo only UI. Backend/API not connected.)</p>
  `;
});
