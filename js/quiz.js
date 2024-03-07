// Script for Quiz Logic
  function checkAnswers() {
    
    // Retrieve selected answers
    var answers = [];
    for (var i = 1; i <= 7; i++) {
      var selectedAnswer = document.querySelector('input[name="q' + i + '"]:checked');
      if (selectedAnswer) {
        answers.push(selectedAnswer.value);
      } else {
        alert("Please answer all questions before submitting.");
        return;
      }
    }
    
    // Check correct answers
    var correctAnswers = ["b", "a", "a", "c", "b", "c", "b"];
    var score = 0;
    for (var i = 0; i < correctAnswers.length; i++) {
      if (answers[i] === correctAnswers[i]) {
        score++;
      }
    }
    
    // Display result
    alert("You scored " + score + " out of 7");
  }