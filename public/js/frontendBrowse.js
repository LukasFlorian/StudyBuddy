document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const searchResults = document.getElementById("searchResults");
  searchResults.classList.add("browse-card-container");

  // Event-Listener für das Suchformular
  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    const searchTerm = formData.get("searchTerm");
    const tags = formData.get("tags"); // Falls du ein zusätzliches Feld hast

    // URL mit Query-Parametern zusammenbauen
    let url = `/browse?searchTerm=${encodeURIComponent(searchTerm)}`;
    if (tags) {
      url += `&tags=${encodeURIComponent(tags)}`;
    }
    
    try {
      const response = await fetch(url);
      const data = await response.json();

      // Ergebnisbereich leeren
      searchResults.innerHTML = "";
      

      if (data.numDocs === 0) {
        searchResults.innerHTML = "<p>No documents found.</p>";
      } else {
        // Für jedes Dokument wird eine Browse Card erstellt
        data.documents.forEach(doc => {
          const card = document.createElement("div");
          card.classList.add("browse-grid-container");

          // Hier kannst du das Layout der Card anpassen – wenn mehr Dokumente vorliegen, ggf. unterschiedliche Styles/pagination
          card.innerHTML = `
            <div class="browse-card">
            <img src="../public/img/browse_placeholder.png" alt="Search result" />
            <p>${doc.docTitle}</p>
            <p>${doc.docDescription}</p>
            <p>Author: ${doc.docAuthor}</p>
            </div>
            <button class="download-btn" data-id="${doc.docID}">Download</button>
          `;
          searchResults.appendChild(card);
        });
      }
    } catch (err) {
      console.error("Error fetching search results:", err);
      searchResults.innerHTML = "<p>Error fetching search results.</p>";
    }
  });

  // Download-Button: Beim Klick wird der Download über den Browser gestartet
  searchResults.addEventListener("click", (e) => {
    if (e.target.classList.contains("download-btn")) {
      const docID = e.target.getAttribute("data-id");
      window.location.href = `/browse/download?docID=${docID}`;
    }
  });
});