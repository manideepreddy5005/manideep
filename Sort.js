
const input = prompt("Enter a list of numbers separated by comma:");

const numbers = input.split(',').map(Number);

if (!numbers.every(Number.isFinite)) {
  alert("Invalid input. Please enter a valid list of numbers.");
} else {

  function bubbleSortDescending(arr) {
    const n = arr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  }
  
  bubbleSortDescending(numbers);

  alert("Sorted array in descending order: " + numbers.join(', '));
}
