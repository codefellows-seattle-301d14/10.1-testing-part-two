var assert = require('./vendor/assert');

/* Welcome back to our testing exercise! This practice module
    will allow you to become even more familiar with testing
    concepts. We test to check the OUTPUT of our code. That is - we are not
    checking for HOW something works, but rather the end RESULT and
    state of a particular place in our application.
*/

  // BEGIN WORK BELOW - test code by running `node bonus-testing-part-two.js`
  //  in your terminal!

  /* ===================================================================
  ---------------------- Part Two! Hungry Lion ----------------------------
  ======================================================================
   As long as the lion is well-fed, he doesn't care too much of the
   humans that pass through. Unfortunately, the new caretaker is a little
   absent-minded.

   The lion needs 4 meals per day on average to stay happy. You're going to
   figure out how many days it took before the lion decided to supplement his
   diet with the caretaker.
  */
//Original Array = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1]

var mealsPerDay = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1];
var tooHungryDay; // fail fail fail
tooHungryDay = '3'; //fail pass pass
tooHungryDay = 'three'; //fail fail fail
tooHungryDay = '-1'; //fail pass fail
tooHungryDay = -1; //pass pass fail
tooHungryDay = 11; //pass fail pass
tooHungryDay = 10; //pass pass pass
tooHungryDay = ''; //fail pass fail


function testIsNumber() {
  assert(
    typeof(tooHungryDay) === 'number',
    'The lion appears to be too hungry after ' + tooHungryDay + ' days...',
    'tooHungryDay should be a number but is instead a data type of ' + typeof tooHungryDay
  );
}

function testProducesAnswer() {
  assert(
    tooHungryDay <= mealsPerDay.length,
    'The day the tiger gets too hungry falls within the limits of the array',
    'tooHungryDay does not occur within the limits of this array'
  );
}

function testHasValidNumbers(){
  assert(
    tooHungryDay > 0,
    'Day is greater than 0',
    'Day is less than 0'
  );
}

  /* TODO:
     Write at least one more test function that calls assert to test
     whether tooHungryDay falls within an acceptable answer
     based on the number of days available in the array. */

  // Bonus! Can you think of other things to test for?
  // Repeat the process for additonal points!


  /* TODO:
   Cycle through the days in mealsPerDay. Log the cumulative average
   meals/day the lion ate since the new caretaker started.
   tooHungryDay should be equal to the day the lion started
   pondering protein supplements (the first day the average dips below 4
   meals) Remember: humans count days starting at 1!

   When ready, execute this program in your terminal with node
   (node bonus-testing-part-two)  :-)
  */
var sum = 0, avg, beenChanged = false;
mealsPerDay.forEach(function(cur, idx, arr){
  sum += cur; //add new value to sum total
  avg = sum/(idx + 1); // divide sum by day of week to get average
  if(avg < 4){ //if avg falls below 4
    if (beenChanged === false){ //and its the first time to change tooHungryDay
      tooHungryDay = idx + 1; //update tooHungryDay
      beenChanged = true; // and set beenchanged to true
    }
  }
});
console.log(tooHungryDay, 'Is too hungry day');
testIsNumber();
testProducesAnswer();
testHasValidNumbers();
