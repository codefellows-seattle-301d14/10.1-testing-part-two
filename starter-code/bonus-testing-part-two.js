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

var mealsPerDay = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1];
var tooHungryDay;

function testIsNumber() {
  assert(
    typeof(tooHungryDay) === 'number',
    'The lion appears to be too hungry after ' + tooHungryDay + ' days...',
    'tooHungryDay should be a number but is instead a data type of ' + typeof tooHungryDay
  );
}

  /* TODO:
     Write at least one more test function that calls assert to test
     whether tooHungryDay falls within an acceptable answer
     based on the number of days available in the array. */
function testTooHungryDay() {
  assert(
    tooHungryDay > 0 && tooHungryDay < mealsPerDay.length,
    'tooHungryDay is ' + tooHungryDay + ', and appears to be valid, yay!',
    'tooHungryDay is ' + tooHungryDay + ', but appears to be invalid, boo!'
  );
}


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
function findTooHungryDay() {
  mealsPerDay.reduce(function(acc, cur, idx) {
    if (typeof tooHungryDay === 'undefined') {
      acc += cur;
      var place = idx + 1;
      var avg = acc / place;
      console.log(avg);
      if (avg < 4) {
        tooHungryDay = place;
        return findTooHungryDay;
      };
      return acc;
    }
  }, 0);
};

testIsNumber();
findTooHungryDay();
testTooHungryDay();
