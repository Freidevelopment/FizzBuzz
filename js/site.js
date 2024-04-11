// Collect user inputs
// AKA Entry points
function getValues() {
  // get the <input /> element for each number and grab its value
  let firstNumber = document.getElementById('fizzNumber').value;
  let secondNumber = document.getElementById('buzzNumber').value;
  let stopValue = document.getElementById('stopValue').value;

  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  stopValue = Number(stopValue);

  // Validate the inputs
    if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(stopValue)) {
          // display an error message
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Please enter valid numbers for FizzBuzz to use',
            backdrop: false
        });
    } else if ((firstNumber == secondNumber) || (firstNumber > stopValue) || (firstNumber < 1) || (secondNumber > stopValue) || (secondNumber < 1)) {
        // display an error message
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Please enter two seperate numbers within the range of 1 and your Stop Value for FizzBuzz to use',
          backdrop: false
      });
    } else if ((stopValue > 5000) || (stopValue < 10)){
        // display an error message
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Please enter a valid number between 10-100 for the stop value',
          backdrop: false
      });
    } else {
        let generatedNumbers = generateValues(0, stopValue);
        displayValues(generatedNumbers);
    }

}

// Generate a list of values between 1 and 100 at the users choice of endpoint
function generateValues(start, end) {
    let numbers = [];

    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }

    return numbers;
}

// display the proper results in my table
function displayValues(numberArray) {
    
    let tableHtml = '';
    let tableDisplay = 0;

    let firstNumber = document.getElementById('fizzNumber').value;
    let secondNumber = document.getElementById('buzzNumber').value;

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    for (let index = 0; index < numberArray.length; index += 1) {
        let number = numberArray[index];
        let className = 'tableNumber';
        
        

    
    if ((number == 0 )) {
        number = numberArray[index];
    // Display FizzBuzz where the first and second number is divisible
    } else if ((number % firstNumber == 0) && (number % secondNumber == 0)) {
      number = 'FizzBuzz';
      className = 'tableFizzBuzz';  
    // Display Fizz where the first number is divisible
    }  else if ((number % firstNumber == 0)){
      number = 'Fizz';
      className = 'tableFizz';
      // Display Buzz where the second number is divisible
    }  else if ((number % secondNumber == 0)) {
      number = 'Buzz';
      className = 'tableBuzz';
    }

    if((tableDisplay == 0) || (tableDisplay % 6 == 0)) {
      tableHtml += '<tr>';
     }
     tableDisplay = tableDisplay + 1;
    
      tableHtml += `<td class="${className}">${number}</td>`;
      

      let tbody = document.getElementById('results');
      tbody.innerHTML = tableHtml;
    }

}