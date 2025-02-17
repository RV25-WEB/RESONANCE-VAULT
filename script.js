document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const requestedFile = params.get("file");

    if (requestedFile) {
        const allFiles = document.querySelectorAll(".file-item");
        let found = false;

        allFiles.forEach(fileItem => {
            const filePath = fileItem.getAttribute("data-file");

            if (filePath === "files/" + requestedFile) {
                fileItem.style.display = "block"; // Mostra solo il file richiesto
                found = true;
            } else {
                fileItem.style.display = "none"; // Nasconde gli altri file
            }
        });

        if (found) {
            // ? Adatta la dimensione del contenitore
            const downloadSection = document.querySelector(".download-section");
            downloadSection.style.display = "flex";
            downloadSection.style.justifyContent = "center";
            downloadSection.style.alignItems = "center";
            downloadSection.style.height = "50vh"; // ?? Altezza più piccola per evitare scroll
            downloadSection.style.padding = "10px";
        }

        // ? Se il file non esiste, mostra un errore
        if (!found) {
            document.getElementById("fileContainer").innerHTML = `
                <p class="error-message">? File non trovato!</p>
            `;
        }
    }
});