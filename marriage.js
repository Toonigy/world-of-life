// Marriage system script (marriage.js)
function proposeTo(playerID) {
    const currentUserID = localStorage.getItem("userID");
    const currentUserName = localStorage.getItem("userName");

    // Check if the player is already married
    if (localStorage.getItem(currentUserID + "_married")) {
        alert("You're already married!");
        return;
    }

    // Store the proposal (assuming simple in-memory storage for this example)
    localStorage.setItem(currentUserID + "_proposal", playerID);
    alert("You have proposed to " + playerID + "!");
}

function acceptProposal() {
    const currentUserID = localStorage.getItem("userID");
    const proposalID = localStorage.getItem(currentUserID + "_proposal");

    if (proposalID) {
        // Mark both players as married
        localStorage.setItem(currentUserID + "_married", proposalID);
        localStorage.setItem(proposalID + "_married", currentUserID);
        alert("Congratulations! You are now married to " + proposalID + "!");
        localStorage.removeItem(currentUserID + "_proposal"); // Remove proposal after acceptance
    } else {
        alert("You don't have any pending proposals.");
    }
}

function rejectProposal() {
    const currentUserID = localStorage.getItem("userID");
    const proposalID = localStorage.getItem(currentUserID + "_proposal");

    if (proposalID) {
        alert("You have rejected the proposal from " + proposalID);
        localStorage.removeItem(currentUserID + "_proposal");
    } else {
        alert("You don't have any pending proposals.");
    }
}

function checkMarriageStatus() {
    const currentUserID = localStorage.getItem("userID");
    const marriedTo = localStorage.getItem(currentUserID + "_married");

    if (marriedTo) {
        alert("You are married to " + marriedTo);
    } else {
        alert("You are not married yet.");
    }
}

function divorce() {
    const currentUserID = localStorage.getItem("userID");
    const marriedTo = localStorage.getItem(currentUserID + "_married");

    if (marriedTo) {
        // Remove both players' marital status
        localStorage.removeItem(currentUserID + "_married");
        localStorage.removeItem(marriedTo + "_married");
        alert("You have divorced from " + marriedTo);
    } else {
        alert("You are not married to anyone.");
    }
}
