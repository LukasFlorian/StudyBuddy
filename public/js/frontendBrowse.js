document.addEventListener("DOMContentLoaded", () => {
  
  // accessing the search form
  const searchForm = document.getElementById("search-form");
  
  // accessing the search results section
  const resultsSection = document.getElementById("search-results");
  
  // adding a class to the search results section to style the search results
  resultsSection.classList.add("browse-card-container");

  // event listener for the search form
  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    const searchTerm = formData.get("searchTerm");
    const tag = formData.get("tag");

    // creating the URL with the search term and the tag (if available)
    let url = `/browse?searchTerm=${encodeURIComponent(searchTerm)}`;
    if (tag) {
      url += `&tag=${encodeURIComponent(tag)}`;
    }
    
    try {
      // fetch request to the server and parse into JSON
      const response = await fetch(url);
      const data = await response.json();

      // clear search results section before displaying new results
      resultsSection.innerHTML = "";
      
      // if no documents are found, display a message
      if (data.numDocs === 0) {
        resultsSection.innerHTML = "<p>No documents found.</p>";
      } else {
        // create a card for each document found
        data.documents.forEach(doc => {
          const card = document.createElement("div");
          card.classList.add("browse-grid-container");

          // display the document title, description and author
          card.innerHTML = `
            <div class="browse-card">
            <img src="../public/img/browse_placeholder.png" alt="Search result" />
            <p>${doc.docTitle}</p>
            <p>${doc.docDescription}</p>
            <p>Author: ${doc.docAuthor}</p>
            </div>
            <button class="download-btn" data-id="${doc.docID}">Download</button>
          `;
          resultsSection.appendChild(card);
        });
      }
    } catch (err) {
      console.error("Error fetching search results:", err);
      resultsSection.innerHTML = "<p>Error fetching search results.</p>";
    }
  });

  // download button event listener
  resultsSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("download-btn")) {
      const docID = e.target.getAttribute("data-id");
      window.location.href = `/browse/download?docID=${docID}`;
    }
  });
});