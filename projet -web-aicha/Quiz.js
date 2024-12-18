function check() {
    // Réponses correctes
    const answers = {
      q1: "if (i!= 5)",
      q2: "function myFunction()",
      q3: "onclick",
      q4: 'alert("Hello World");',
      q5: "Math.max(x, y)",
      q6: "JavaScript",
      q7: "Cascading Style Sheets",
      q8: "Hypertext Markup Language",
      q9: "srcset",
      q10: "auto"
    };
  
    let score = 0;
  
    // Vérifier les réponses
    for (let questionId in answers) {
      const userAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
      const correctAnswer = answers[questionId];
  
      // Si aucune réponse n'est cochée
      if (!userAnswer) {
        alert("Veuillez répondre à toutes les questions avant de soumettre !");
        return;
      }
  
      // Vérifier si la réponse est correcte
      const message = userAnswer.value === correctAnswer 
        ? "Bonne réponse !" 
        : `Mauvaise réponse ! La bonne réponse est : ${correctAnswer}`;
      const isCorrect = userAnswer.value === correctAnswer;
  
      if (isCorrect) score++;
      showFeedback(questionId, message, isCorrect);
    }
  
    // Afficher le score
    showScore(score);
  
    // Cacher le bouton de soumission
    document.getElementById("Button").style.display = "none";
  
    // Ajouter le bouton "Recommencer"
    addRetakeButton();
  }
  
  // Affiche le feedback sous chaque question
  function showFeedback(questionId, message, isCorrect) {
    const feedback = document.createElement("div");
    feedback.textContent = message;
    feedback.style.color = isCorrect ? "green" : "red";
    document.getElementById(questionId).appendChild(feedback);
  }
  
  // Affiche le score final
  function showScore(score) {
    const result = document.createElement("div");
    result.id = "score";
  
    if (score === 10) {
      result.textContent = `Félicitations ! Votre score est ${score}/10.`;
    } else if (score >= 7) {
      result.textContent = `Bon travail ! Votre score est ${score}/10.`;
    } else if (score >= 4) {
      result.textContent = `Meilleure chance la prochaine fois ! Votre score est ${score}/10.`;
    } else {
      result.textContent = `Vous avez besoin d'amélioration. Votre score est ${score}/10.`;
    }
  
    result.setAttribute("id", "scores");
        document.body.appendChild(result);
  }
  
 // Fonction pour ajouter un bouton "Recommencer"
function addRetakeButton() {
    const retakeButton = document.createElement("button");
    retakeButton.id = "retake";
    retakeButton.innerHTML = '<a href="./Quiz.html" style="text-decoration:none; color:black;">Recommencer</a>';
    document.body.appendChild(retakeButton);
  }