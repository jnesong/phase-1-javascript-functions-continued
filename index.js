// Your code here
//LAB: Implement a function called saturdayFun. It should return a String like "This Saturday, I want to ....!" Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "roller-skate". Run learn to verify you've gotten the first set of tests passing before continuing with the lesson.
const saturdayFun = function(activityFun = "roller-skate") {
    return "This Saturday, I want to " + activityFun + "!";
}

console.log(saturdayFun("swim"));


//LAB: Implement a function expression called mondayWork. 
//The function should return a String like "This Monday, I will ... ." 
//Fill in the ... with the activity that's passed in as the first parameter. 
//If nothing is passed in, default to "go to the office". 
//Run learn to verify you've gotten this set of tests passing before continuing with the lesson.

const mondayWork = function(activityWork = "go to the office"){
    return "This Monday, I will " + activityWork + ".";
}

console.log(mondayWork());


function wrapAdjective(visualFlair = "*"){
    const innerFunction = function(adjective="special"){
        return "You are " + visualFlair + adjective + visualFlair + "!";
    }
    return innerFunction;
}

