document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("search-form");
  const resultsSection = document.getElementById("search-results");

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
      resultsSection.innerHTML = "";

      if (data.numDocs === 0) {
        resultsSection.innerHTML = "<p>No documents found.</p>";
      } else {
        // Für jedes Dokument wird eine Browse Card erstellt
        data.documents.forEach(doc => {
          const card = document.createElement("div");
          card.classList.add("browse-card");

          // Hier kannst du das Layout der Card anpassen – wenn mehr Dokumente vorliegen, ggf. unterschiedliche Styles/pagination
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
      console.error("Error fetching search results:", err);
      resultsSection.innerHTML = "<p>Error fetching search results.</p>";
    }
  });

  // Download-Button: Beim Klick wird der Download über den Browser gestartet
  resultsSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("download-btn")) {
      const docID = e.target.getAttribute("data-id");
      window.location.href = `/browse/download?docID=${docID}`;
    }
  });
});