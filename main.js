//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

console.log("--------------------Answer1-------------------");
function findPairsWithGivenSum(arr1, sum) {
    let pairs = [];
    let hash = {};
    for (let i = 0; i < arr1.length; i++) {
      let complement = sum - arr1[i];
      if (hash[complement] !== undefined) {
        pairs.push([arr1[i], complement]);
      }
      hash[arr1[i]] = i;
    }
    return pairs;
  }
let arr1 = [0,1,2,3,4,5,6,7,8,9,10,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10];
let sum = 6;
let pairs = findPairsWithGivenSum(arr1, sum);
console.log(`Pairs with sum ${sum}:`, pairs);

//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
console.log("--------------------Answer2-------------------");
function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      [arr[left], arr[right]] =[arr[right], arr[left]];
      left++;
      right--;
    }
    return arr;
  }
let arr = [0,1,2,3,4,5,6,7,8,9];
console.log("Original array:", arr);
let reversedArray = reverseArrayInPlace(arr);
console.log("Reversed array:", reversedArray);

//Q3. Write a program to check if two strings are a rotation of each other?
console.log("--------------------Answer3-------------------");
function areRotations(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    let str = str1 + str1;
    return str.includes(str2);
  }
  let str1 = "Suraj";
  let str2 = "Assignment";
  let str3 = "Rajput";
  let str4 = "Suraj";
  if (areRotations(str1, str2)) {
    console.log(`"${str1}" and "${str2}" are rotations of each other.`);
  }
else {
    console.log(`"${str1}" and "${str2}" are not rotations of each other.`);
  }
  if (areRotations(str3, str4)) {
    console.log(`"${str3}" and "${str4}" are rotations of each other.`);
  }
else {
    console.log(`"${str3}" and "${str4}" are not rotations of each other.`);
  }
  
//Q4. Write a program to print the first non-repeated character from a string?
console.log("--------------------Answer4-------------------");
function firstNonRepeatedChar(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
    return null;
  }
  let str = "Suraj";
  console.log("String=", str);
  let FirstNonRepeatedChar = firstNonRepeatedChar(str);
  if (FirstNonRepeatedChar === null) {
    console.log("No non-repeated characters found.");
  } else {
    console.log("First non-repeated character=", FirstNonRepeatedChar);
  }

//Q5  Read about the Tower of Hanoi algorithm. Write a program to implement it.
console.log("--------------------Answer5-------------------");function towerOfHanoi(n, from, to, aux) {
    if (n === 1) {
      console.log(`Move disk 1 from ${from} to ${to}`);
      return;
    }
    towerOfHanoi(n - 1, from, aux, to);
    console.log(`Move disk ${n} from ${from} to ${to}`);
    towerOfHanoi(n - 1, aux, to, from);
  }
  let n = 2;
  towerOfHanoi(n, 'S', 'A', 'L');

//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
console.log("--------------------Answer6-------------------");	function isOperator(x)
	{

		switch (x) {
		case '+':
		case '-':
		case '/':
		case '*':
			return true;
		}
		return false;
	}
	function postToPre(post_exp)
	{
		let s = [];
		let length = post_exp.length;
		for (let i = 0; i < length; i++) {
			if (isOperator(post_exp[i])) {
				let op1 = s[s.length - 1];
				s.pop();
				let op2 = s[s.length - 1];
				s.pop();
				let temp = post_exp[i] + op2 + op1;
				s.push(temp);
			}
			else {
				s.push(post_exp[i] + "");
			}
		}
		let ans = "";
		while (s.length > 0)
			ans += s.pop();
		return ans;
	}
	let post_exp = "ABC+*D/";
  console.log("Taken Postfix", post_exp)
	console.log("Prefix : " + postToPre(post_exp));

//Q7 Write a program to convert prefix expression to infix expression.
console.log("--------------------Answer7-------------------");   function isOperator(x)
	{
		switch(x)
		{
			case '+':
			case '-':
			case '*':
			case '/':
			case '^':
			case '%':
				return true;
		}
		return false;
	}
	function convert(str)
	{
		let stack = [];
		let l = str.length;
		for(let i = l - 1; i >= 0; i--)
		{
			let c = str[i];
			if (isOperator(c))
			{
				let op1 = stack[stack.length - 1];
				stack.pop()
				let op2 = stack[stack.length - 1];
				stack.pop()
				let temp = "(" + op1 + c + op2 + ")";
				stack.push(temp);
			}
			else
			{
				stack.push(c + "");
			}
		}
		return stack[stack.length - 1];
	}
	let exp = "/*-+Suaraj";
	console.log("Taken prefix=",exp)
	console.log("Infix : ",convert(exp));
	
//Q8. Write a program to check if all the brackets are closed in a given code snippet.
console.log("--------------------Answer8-------------------");
function areBracketsClosed(pgm) {
    let stack = [];   
    for (let i = 0; i < pgm.length; i++) {
      let char = pgm[i];
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        if (stack.length === 0) return true;
        let top = stack.pop();
        if ((char === ')' && top !== '(') ||
            (char === '}' && top !== '{') ||
            (char === ']' && top !== '[')) {
          return true;
        }
      }
    }
    return stack.length === 0;
  }
  let pgm = "{ [ ( ] ) }";
  console.log("Code:", pgm);
  let result = areBracketsClosed(pgm);
 console.log("All brackets are closed : ", result);

//Q9. Write a program to reverse a stack.
console.log("--------------------Answer9-------------------");    function reverseStack(stack) {
    if (stack.length === 0) return stack;
    var item = stack.pop();
    reverseStack(stack);
    stack.unshift(item);
    return stack;
    }
  var stack = [9,8,7,6,5,4,3,2,1];
  console.log("original stack=",stack);
  stack = reverseStack(stack);
  console.log("reverse stack=",stack);

//Q10 Write a program to find the smallest number using a stack.
 console.log("--------------------Answer10-------------------");
    function findSmallest(stack1) {
    let min = 10;
    while (stack1.length > 0) {
      let item = stack1.pop();
      if (item < min) {
        min = item;
}
}
    return min;
    } 
  let stack1 = [12,2,5,2,4,6,8,0];
console.log("Stack:", stack1);
  let smallest = findSmallest(stack1);
  console.log("Smallest Number:", smallest);
  