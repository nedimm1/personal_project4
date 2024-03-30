const numButtons = document.querySelectorAll('.num-button')
const display = document.querySelector('.display')
const calculate = document.querySelector('.calculate')
const clearButton = document.querySelector('.clear-button')
const divide = document.querySelector('.divide')

let nums = []

numButtons.forEach(function (button) {
    button.addEventListener('click', function () {

    console.log(i)
    
    let value = button.textContent
  
    nums.push(value)

    display.value = nums.join(" ")
    


    });
});


divide.addEventListener('click', function () {
    nums.push('/')
})



calculate.addEventListener('click', function () {

    let concatenatedArray = [];

    for (let i = 0; i < nums.length; i++) {
        if (!isNaN(nums[i]) || nums[i] === ".") {
            let concatenatedNumber = nums[i];
            while (i + 1 < nums.length && (!isNaN(nums[i + 1]) || nums[i + 1] === ".")) {
                concatenatedNumber += nums[i + 1];
                i++;
            }
            concatenatedArray.push(concatenatedNumber);
        } else {
            concatenatedArray.push(nums[i]);
        }
    }

    let joined = concatenatedArray.join(' ')

    const math = eval(joined)

    display.value = math

    nums = [`${math}`]

    console.log(nums)
})


clearButton.addEventListener('click', function () {
    nums = []
    console.log(nums)
    display.value = nums
})