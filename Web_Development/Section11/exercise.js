// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
let courseName = "Web Development";
let coursePrice = 200;
let mainGoals = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
// 2) Output ("alert") the three variable values
alert(courseName);
alert(coursePrice);
alert(mainGoals);
// 3) Try "grouping" the three variables together and still output their values thereafter
let courseInfo = {
    courseName,
    coursePrice,
    mainGoals
};

alert(courseInfo.courseName);
alert(courseInfo.coursePrice);
alert(courseInfo.mainGoals);
// 4) Also output the second element in your "main goals" variable
alert(courseInfo.mainGoals[1]);
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
function printGoal(goals, index) {
    alert(goals[index]);
}
// 6) Execute your custom command from (5) and output ("alert") the result
printGoal(courseInfo.mainGoals, 0);
printGoal(courseInfo.mainGoals, 1);
printGoal(courseInfo.mainGoals, 2);