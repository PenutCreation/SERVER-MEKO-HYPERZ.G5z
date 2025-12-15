function loadDatabaseAndMain() {
    // Load DATABASEPOSTS.js with cache-busting query
    const dbScript = document.createElement("script");
    dbScript.src = `https://cdn.jsdelivr.net/gh/PenutCreation/MEKO/ajaxent/ajaxent/DATABASELOAD_RULES_API-AE2828U292_KAKASK_SODI_SKFN_OSID_ISKD882AJDKOEID82SJJS28DKI38ASU.js`;
    dbScript.onload = () => {
      // Load main.js after database is loaded
      
    };
    document.body.appendChild(dbScript);
  }

  // Wait until DOM is fully loaded
  document.addEventListener("DOMContentLoaded", loadDatabaseAndMain);
