function getQuote() {
  const quoteText = document.getElementById('quote');
  const authorText = document.getElementById('author');

  quoteText.textContent = "Loading...";
  authorText.textContent = "";

  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      if (!res.ok) throw new Error("API error");
      return res.json();
    })
    .then((data) => {
  quoteText.textContent = `"${data.slip.advice}"`;
  authorText.textContent = ""; // This API doesn’t return an author
})
    .catch((err) => {
      quoteText.textContent = "Oops! Could not fetch quote. Try again later.";
      console.error(err);
    });
}

document.getElementById("darkModeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
});

    
