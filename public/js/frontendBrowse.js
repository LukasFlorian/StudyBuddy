document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("search-form");
  const resultsSection = document.getElementById("search-results");

  // Event-Listener for the search form
  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    const searchTerm = formData.get("searchTerm");
    const tag = formData.get("tag");

    // change url to include search term and tag
    let url = `/browse?searchTerm=${encodeURIComponent(searchTerm)}`;
    if (tag) {
      url += `&tag=${encodeURIComponent(tag)}`;
    }
    
    try {
      const response = await fetch(url); // fetches the search results  from the server
      const data = await response.json(); // parses the JSON response

      // empty the results section
      resultsSection.innerHTML = "";

      if (data.numDocs === 0) { // if no documents are found
        resultsSection.innerHTML = "<p>No documents found.</p>";
      } else {
        // create browse cards for each document
        data.documents.forEach(doc => {
          const card = document.createElement("div"); // create a div element for each document
          card.classList.add("browse-card"); // add the class "browse-card" to the div element

          // set the inner HTML of the card element with the document information
          card.innerHTML = `
            <h2>${doc.docTitle}</h2>
            <p>${doc.docDescription}</p>
            <p>Author: ${doc.docAuthor}</p>
            <p>Date: ${new Date(doc.docDate).toLocaleString()}</p>
            <button class="download-btn" data-id="${doc.docID}">Download</button>
          `;
          resultsSection.appendChild(card);
        });
      }
    } catch (err) {
      console.error("Error fetching search results:", err); // log an error message if there is an error fetching the search results
      resultsSection.innerHTML = "<p>Error fetching search results.</p>"; // display an error message in the results section
    }
  });

  // Donwload button event listener to download the document when button clicked 
  resultsSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("download-btn")) {
      const docID = e.target.getAttribute("data-id"); // get the document ID from the data attribute of the button
      window.location.href = `/browse/download?docID=${docID}`; // redirect to the download route with the document ID as a query parameter
    }
  });
});