"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Connor J Webdale 
   Date: 3.13.19 
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
// Runs the init() function when the page is loaded by the browser 
window.onload = init();

// Creates a function called init() 
function init() {
      // Declares the "stars" variable that stores an object collection of the reviewing stars, referenced by the "span#stars img" selector.  
      var stars = document.querySelectorAll("span#stars img");

      // Loops through the star collection and for each star image changes the cursor style, and adds an event listener to run the lightStars() function. 
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }

      // Adds an event listener to the comment text area box that runs the updateCount() function event in response to the keyup event. 
      document.getElementById("comment").addEventListener("keyup",
            updateCount);
}

// Creates the lightStars() function to color a star when the user moves the mouse pointer over a star image. 
function lightStars() {
      // Stores the value of the "alt" attribute of the target of the event object in the starNumber variable. 
      var starNumber = event.target.alt;

      // Declares the "stars" variable that stores an object collection of the reviewing stars, referenced by the "span#stars img" selector. 
      var stars = document.querySelectorAll("span#stars img");

      // Loops through the value of the starNumber variable, changing the star's image src. 
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }

      // Unlights stars in a collection 
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }

      // Change the value of an input box to reflect the user's rating. 
      document.getElementById("rating").value = starNumber + " stars";

      // Adds an event listener to "unlight" the stars. 
      event.target.addEventListener("mouseleave", turnOffStars);

      // Moving the mouse pointer off the star should not remove the rating. Adds an event listener for the target of the event object that runs an anonymous function removing the turnOffStars() function. 
      event.target.addEventListener("click", function () {
            event.target.removeEventListener("mouseleave", turnOffStars);
      })
}

function turnOffStars() {
      // The stars variable contains the object collection referenced by the selector "span#stars img"
      var stars = document.querySelectorAll("span#stars img");

      // Changes the src attribute of each image to the original star. 
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";
      }

      // Changes the value of the rating input box to an empty text string 
      document.getElementById("rating").value = "";
}

// Keeps a running total of the number of characters that the user has typed into the comment text area box. 
function updateCount() {
      // Sets commentText equal to the value stored in the comment text area box. 
      var commentText = document.getElementById("comment").value;

      // Use the countCharacters() function with commentText as the parameter value to calculate the number of characters in commentText. 
      var charCount = countCharacters(commentText);

      // Declares "wordCountBox" that references the wordCount input box. 
      var wordCountBox = document.getElementById("wordCount").value;

      // Changes the value stored in the wordCount input box to a text string displaying the amount of characters out of 1000. 
      document.getElementById("wordCount").value = charCount + "/1000";

      // If charChount is greater than 1000, changes the color and background color, otherwise set the background white and font to black. 
      if (charCount > 1000) {
            document.getElementById("wordCount").style.color = "white";
            document.getElementById("wordCount").style.backgroundColor = "red";
      } else {
            document.getElementById("wordCount").style.color = "black";
            document.getElementById("wordCount").style.backgroundColor = "white";
      }

}


/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}