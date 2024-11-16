const readline = require("readline");

function deafGrandma() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const responses = {
    emptyInput: "WHAT?!",
    lowercaseInput: "SPEAK UP, KID!",
    uppercaseInput: "NO, NOT SINCE 1946!",
    firstGoodbye: "LEAVING SO SOON?",
    secondGoodbye: "LATER, SKATER!",
  };

  let goodbyeCount = 0;

  const askGrandma = () => {
    const regexLower = /[a-z]/;
    const regexUpper = /[A-Z]/;
    rl.question("Speak to grandma: ", (userInput) => {
      if (userInput.trim() === "") {
        console.log(responses.emptyInput);
      } else if (userInput === "GOODBYE!") {
        goodbyeCount++;
        if (goodbyeCount == 1) {
          console.log(responses.firstGoodbye);
        } else if (goodbyeCount == 2) {
          console.log(responses.secondGoodbye);
          rl.close();
          return;
        }
      } else if (regexLower.test(userInput)) {
        console.log(responses.lowercaseInput);
      } else if (regexUpper.test(userInput)) {
        console.log(responses.uppercaseInput);
      }
      askGrandma();
    });
  };
  askGrandma();
}

deafGrandma();
