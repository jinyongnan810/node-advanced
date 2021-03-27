/* The to-be-executed javascript code */
function mainFunction() {
  console.log("Some functions");
}
/* The to-be-executed javascript code */

/* Behind the scenes */

// Lists that determine whether or not the process should continue
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// Judge whether the process should continue
function shouldContinue() {
  // Check 1: If there are still some setInterval, setTimeout, setImmediate
  // Check 2: If there are any system pending tasks(Like server listening to a port)
  // Check 3: If there are any pending long running operations(Like fs reading files)
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}
// The background event-loop
while (shouldContinue()) {
  // A tick
  // 1.Do what is needed to be done.
  //  If any pending timers, execute the callbacks(setInterval,setTimeout)
  //  If any pending OS tasks, execute the tasks
  //  If any long running operations. execute the operations
  // 2.Pause until
  //  OStasks done,LongOperation done, or timer complete
  // 3.If any pending timers, execute the callbacks(setImmediate)
  // 4.If any 'close' event, execute the callbacks
}

/* Behind the scenes */

// Node exit process
