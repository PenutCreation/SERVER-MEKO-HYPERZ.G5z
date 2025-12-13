function loadDatabaseAndMain() {
    // Load DATABASEPOSTS.js with cache-busting query
    const dbScript = document.createElement("script");
    dbScript.src = `main.js?v=${Date.now()}`;
    dbScript.onload = () => {
      // Load main.js after databas is loaded
      
    };
    document.body.appendChild(dbScript);
  }

  // Wait until DOM is fully loaded
  document.addEventListener("DOMContentLoaded", loadDatabaseAndMain);
