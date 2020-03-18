// Find New way to add variable in string without using + example is below
const name = 'Nameer';
const designation = 'Software Developer';
const data = `My Name is "${name}" and I'm a "${designation}"`;
console.log(data);

// Use of Let
let click = 0; // For Global Use 

// Use of Arrow function
const changeLetValue = () => {
    // Use of Let
    let useOfLet = 'Use Of Let';
    // Use of Const 
    const value = document.getElementById('useOfLet');
    click++;
    if (click == 1){
        useOfLet = 'Function called One Time';
        value.innerHTML = useOfLet;
    } else if (click == 2) {
        useOfLet = 'Function called Two Time';
        value.innerHTML = useOfLet;
    } else if (click == 3) {
        useOfLet = 'Function called Three Time';
        value.innerHTML = useOfLet;
    } else if (click > 3) {
        click = 0;
        useOfLet = 'Function Reset';
        value.innerHTML = useOfLet;
    }
}



// Use of Arrow Function in One Line 
const changeConstValue = (value) => value

// Submit function in Arrow Fucntion
const submit = () => {
    const name = document.getElementById('name');
    const userName = document.getElementById('username');
    const checkbox = document.getElementById('checkbox').checked;
    if (name.value !== '' && userName.value !== '' &&  checkbox){
      alert(changeConstValue(`${name.value} Your Form is Submitted Successfully`));
    } else {
      alert(changeConstValue(`${name.value} Please check & Filled all fields`));
    }
}

// Array
let Numbers = [1, 5, 10, 15, 25, 30];

// Use of Arrow Function in One Line 
// Find Index of first number over 16
const findValue = (value, index, Array) => value > 16;
const findIndex = Numbers.findIndex(findValue);


// Print first number index over 16
console.log(`First number over 18 has index ${findIndex}`);

// get object value from functions
const getBook = (title, author) => {
    return { 
        title,
         author
    }
    }

// get book
const book = getBook("Harry Potter", "JK");
console.log(book);


const list = {
    cart: 'Shopping List',
    items: ['Milk', 'Sugar']
}

const {cart, items} = list;
console.log(cart);
console.log(items);


// Use Of Class

class ShoppingList {
    constructor (items , no) {
      this.items = items;
      this.no = no;
    }
}

const myList = new ShoppingList(["Milk, Choco, RedBull"], 3);
console.log(myList);