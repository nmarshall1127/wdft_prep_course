// Exercise #1
// Write your solution below
var output = "";

for (var a = 0; a < 7; a++)
{
    output += "#";
    console.log(output);
}
/* 
    The first thing I did was declare an empty string variable called 'output'. Then I made a for loop that
    iterates 7 times. For each iteration, I append the 'output' variable with one number symbol. I then
    display the output for each line. This way, the number of symbols displayed on each line depends on the
    current iteration of the loop.
*/





// Exercise #2
// Write your solution below

function isEven(value)
{
    if (value % 2 === 0)
    {
        console.log("The number is even!");
    }
    else
    {
        console.log("The number is odd!");
    }
}

/* 
    To determine if the given value is even, I check to see if the remaineder of divinding the value by
    2 is 0. If it is 0, the value must be an even number. If the remainder is NOT 0, then the value must be
    an odd number.
*/
