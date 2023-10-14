function reverseWordsInASentence(sentence) {
    let reversedSentence = '';
    let wordStart = 0;
    for (let i = 0; i <= sentence.length; i++) {
      if (sentence[i] === ' ' || i === sentence.length) {

        for (let j = i - 1; j >= wordStart; j--) {
          reversedSentence += sentence[j];
        }
    
        if (i !== sentence.length) {
          reversedSentence += ' ';
        }
        
        wordStart = i + 1;
      }
    }
    return reversedSentence;
  }
  
  
  const inputSentence = prompt("Enter a sentence:"); 
  

  const reversedSentence = reverseWordsInASentence(inputSentence);
  
 
  console.log("Reversed Sentence: " + reversedSentence);
  