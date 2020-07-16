/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, 
    array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers 
(each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the 
number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor 
(Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure 
that all your code is private and doesn't interfere with the other programmers code (Hint: we 
    learned a special technique to do exactly that).
*/
 
//Part 1
(function() {
var question = function(question, options, correctAns) {
    this.question = question;
    this.options = options;
    this.correctAns = correctAns;
}

//Part 2
var question1 = new question("What is the most spoken language?", ["0: Chinese", "1: American"],
"0");
var question2 = new question("In which continent Pakistan is located?", ["0: Europe", "1: Asia"], "1");
var question3 = new question("What is the name of Pakistans' prime minister?", ["0: Nawaz Sharif", 
"1: Imran Khan"], "1");
var question4 = new question("Are you having fun?", ["0: Yes", "1: No"], "0");

//Part 3
var quesArray = [question1, question2, question3, question4];

//Part 4
var quesNum = Math.floor(Math.random() * 4);
console.log(quesNum);

    if(quesNum == '0') {
        console.log(question1.question, question1.options);

    } else if (quesNum == '1') {
        console.log(question2.question, question2.options);
    } else if (quesNum == '2') {
        console.log(question3.question, question3.options);
    } else {
        console.log(question4.question, question4.options);
    }

//Part 5
    // var ans;
    // if(quesNum == '0') {
    //     ans = prompt(question1.question+ " \n"+question1.options);
    //     // console.log(question1.question, question1.options, ans);

    // } else if (quesNum == '1') {
    //     ans = prompt(question2.question+ "\n"+question2.options);
    //     // console.log(question2.question, question2.options, ans);
    // } else if (quesNum == '2') {
    //     ans = prompt(question3.question+ "\n"+question3.options);
    //     // console.log(question3.question, question3.options, ans);
    // } else {
    //     ans = prompt(question4.question+ "\n"+question4.options);
    //     // console.log(question4.question, question4.options, ans);
    // }

//Part 6
var ans = prompt(quesArray[quesNum].question+ " \n"+quesArray[quesNum].options);
console.log(ans, question.prototype.correctAns)

question.prototype.checkCorrect = function(ans) {
    if(ans == quesArray[quesNum].correctAns) {
        console.log("Correct answer");
    } else {
        console.log("Try again!");
    }
}
    
    quesArray[quesNum].checkCorrect(ans);
})();