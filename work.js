// Function to let the player work and earn experience/money
function work() {
    let careerData = JSON.parse(localStorage.getItem("career"));

    if (!careerData) {
        alert("Please choose a career first!");
        return;
    }

    // Add experience and money based on the current job level
    careerData.experience += 10;
    careerData.salary += 50; // Increase salary as they level up

    // Check if the player has leveled up
    if (careerData.experience >= careerData.level * 100) {
        careerData.level += 1;
        careerData.experience = 0; // Reset experience for the next level
        alert(`You leveled up! You are now level ${careerData.level} in your career.`);
    }

    // Save updated career data
    localStorage.setItem("career", JSON.stringify(careerData));

    // Update UI
    updateCareerUI();
}

// Update the career UI to display current progress
function updateCareerUI() {
    let careerData = JSON.parse(localStorage.getItem("career"));

    if (!careerData) {
        alert("No career data found. Please choose a career.");
        return;
    }

    document.getElementById("career-info").innerHTML = `
        <p>Job: ${careerData.job}</p>
        <p>Level: ${careerData.level}</p>
        <p>Experience: ${careerData.experience}</p>
        <p>Salary: $${careerData.salary}</p>
    `;
}

// Call the update function when the page loads
window.onload = function() {
    updateCareerUI();
};
