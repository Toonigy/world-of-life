// Initialize relationships if not already in localStorage
function initializeRelationships() {
    let relationships = JSON.parse(localStorage.getItem("relationships"));

    if (!relationships) {
        relationships = {
            "npc1": {
                "name": "Alex",
                "affection": 50,
                "status": "friend",
                "events": []
            },
            "npc2": {
                "name": "Jordan",
                "affection": 30,
                "status": "friend",
                "events": []
            }
        };
        localStorage.setItem("relationships", JSON.stringify(relationships));
    }

    updateUI();
}

// Function to interact with NPCs
function interactWithNPC(npcName) {
    let relationships = JSON.parse(localStorage.getItem("relationships"));
    let npc = relationships[npcName];

    if (!npc) {
        alert("NPC not found!");
        return;
    }

    // Show different options based on the NPC's relationship status
    let options = "";
    if (npc.status === "friend") {
        options = `
            <button onclick="giveCompliment('${npcName}')">Give Compliment</button>
            <button onclick="askOut('${npcName}')">Ask Out</button>
        `;
    } else if (npc.status === "romantic") {
        options = `
            <button onclick="goOnDate('${npcName}')">Go on a Date</button>
        `;
    } else if (npc.status === "crush") {
        options = `
            <button onclick="confessLove('${npcName}')">Confess Your Love</button>
        `;
    }

    document.getElementById("interaction-options").innerHTML = options;
}

// Increase affection points and update the status of NPC
function giveCompliment(npcName) {
    let relationships = JSON.parse(localStorage.getItem("relationships"));
    let npc = relationships[npcName];

    npc.affection += 10; // Increase affection points

    if (npc.affection >= 50 && npc.status === "friend") {
        npc.status = "romantic"; // Change status to romantic
    }

    // Save updated relationship
    localStorage.setItem("relationships", JSON.stringify(relationships));
    alert(`You complimented ${npc.name}. Affection increased!`);
    updateUI();
}

function askOut(npcName) {
    let relationships = JSON.parse(localStorage.getItem("relationships"));
    let npc = relationships[npcName];

    if (npc.affection >= 50) {
        npc.status = "romantic"; // Change status to romantic
        alert(`You asked out ${npc.name}. They said yes!`);
    } else {
        alert(`${npc.name} doesn't like you enough to go out with you yet.`);
    }

    // Save updated relationship
    localStorage.setItem("relationships", JSON.stringify(relationships));
    updateUI();
}

function goOnDate(npcName) {
    let relationships = JSON.parse(localStorage.getItem("relationships"));
    let npc = relationships[npcName];

    npc.affection += 20; // Increase affection points
    alert(`You went on a date with ${npc.name}. Affection increased!`);

    // Save updated relationship
    localStorage.setItem("relationships", JSON.stringify(relationships));
    updateUI();
}

function confessLove(npcName) {
    let relationships = JSON.parse(localStorage.getItem("relationships"));
    let npc = relationships[npcName];

    if (npc.affection >= 80) {
        npc.status = "romantic"; // Change status to romantic
        alert(`You confessed your love to ${npc.name}. They said yes!`);
    } else {
        alert(`${npc.name} doesn't feel the same way yet.`);
    }

    // Save updated relationship
    localStorage.setItem("relationships", JSON.stringify(relationships));
    updateUI();
}

// Update the UI with the current relationship status
function updateUI() {
    let relationships = JSON.parse(localStorage.getItem("relationships"));
    let relationshipStatusHTML = "";

    for (let npcName in relationships) {
        let npc = relationships[npcName];
        relationshipStatusHTML += `
            <p>${npc.name}: Affection: ${npc.affection}, Status: ${npc.status}</p>
        `;
    }

    document.getElementById("relationship-status").innerHTML = relationshipStatusHTML;
}

// Call initializeRelationships when the page loads
window.onload = function() {
    initializeRelationships();
};
