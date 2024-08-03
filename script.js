


// script.js

// Function to add a recommendation to the list
function addRecommendation() {
    // Get the input field and its value
    const inputField = document.getElementById('recommendation_input');
    const recommendationText = inputField.value.trim();
    
    // Check if the input is not empty
    if (recommendationText) {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = recommendationText;
        
        // Append the new list item to the list
        const recommendationsList = document.getElementById('recommendations_list');
        recommendationsList.appendChild(listItem);
        
        // Clear the input field
        inputField.value = '';
        showPopup(true);
    } else {
        // Alert the user if the input is empty
        alert('Please enter a recommendation.');
    }
}

// Add event listener to the button after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const recommendButton = document.getElementById('recommend_btn');
    recommendButton.addEventListener('click', addRecommendation);
});

function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible'
    } else {
      document.getElementById('popup').style.visibility = 'hidden'
    }
    
  }