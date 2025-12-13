function loadDatabaseAndMain() {
    // Load DATABASEPOSTS.js with cache-busting query
    const dbScript = document.createElement("script");
    dbScript.src = `https://cdn.jsdelivr.net/gh/PenutCreation/SERVER-MEKO-HYPERZ.G5z/DATABASELOAD_API-28SKDJDOKEO2982KDJHVDUEK2982KD.js?v=${Date.now()}`;
    dbScript.onload = () => {
      // Load main.js after database is loaded
      const mainScript = document.createElement("script");
      mainScript.src =`DATABASELOAD_RULES_API-AE2828U292882AJDKOEID82SJJS28DKI38ASU.js?v=${Date.now()}`;
      document.body.appendChild(mainScript);
    };
    document.body.appendChild(dbScript);
  }

  // Wait until DOM is fully loaded
  document.addEventListener("DOMContentLoaded", loadDatabaseAndMain);
