/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

function calculateGrade(score) {
    switch (true) {
       case score>=90 && score<=100:
          return "A";
          case score>=60 && score<90:
             return "B";
             case score>=40 && score<60:
          return "C";
          case score>=0 && score<40:
          return "F";
       default:
          break;
    }
 }
 
 var grade = calculateGrade(90);
 console.log('Grade achieved is ==> '+grade);
 grade=calculateGrade(60);
 console.log('Grade achieved is ==> '+grade);
 grade=calculateGrade(40);
 console.log('Grade achieved is ==> '+grade);
 grade=calculateGrade(0);
 console.log('Grade achieved is ==> '+grade);