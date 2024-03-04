export default function taskBlock(trueOrFalse) {
  let task = false; // Using let instead of var
  let task2 = true; // Using let instead of var

  if (trueOrFalse) {
    let task = true; // Using let instead of var
    let task2 = false; // Using let instead of var
  }

  return [task, task2];
}
