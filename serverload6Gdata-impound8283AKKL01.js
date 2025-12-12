
  function loadDatabaseAndMain() {
    // Load DATABASEPOSTS.js with cache-busting query
    const dbScript = document.createElement("script");
    dbScript.src = `https://cdn.jsdelivr.net/gh/PenutCreation/SERVER-MEKO-HYPERZ.G5z/DATABASEPOSTS.js?v=${Date.now()}`;
    dbScript.onload = () => {
      // Load main.js after database is loaded
      const mainScript = document.createElement("script");
      mainScript.src = "main.js";
      document.body.appendChild(mainScript);
    };
    document.body.appendChild(dbScript);
  }

  // Wait until DOM is fully loaded
  document.addEventListener("DOMContentLoaded", loadDatabaseAndMain);
