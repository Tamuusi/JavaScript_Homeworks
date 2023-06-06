// Arithmetic Operators on numbers
/* 
Problem 1: 

create a variable and assign value 5
and add following statements (original variable should change on every step):
1. add 2
2. substract 6 
3. multiply by 30 
4. divide by 2 
5. modulo 5 
6. exponent by 3 
*/
let x = 5;
console.log(x);

x += 2;
x -= 6;
x *= 30;
x /= 2;
x %= 5;
x **= 3;
console.log(x);

/*
Problem 2:

repeat same steps but using assignment operators
*/
let X = 5;
console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 30);
console.log(5 / 1);
console.log(5 % 2);
console.log(5 ** 3);

/* Comparison Operators */
/*
Problem 3:

Compare following statements and log them in console:
1. does 0.1 + 0.2 equals to 0.3?
2. does true (as a boolean) equals to "true"?
3. does 1 + 7 not equals to 8?
4. is 10 in power 5 greater than 9 in power 6?
5. is 17 divided 6 less than or equal to 4?
*/

//3.1
let A = 0.1 + 0.2;
let B = 0.3;
console.log(A === B);

//3.3
let C = 1 + 7;
let D = 8;
console.log(C !== D);

//3.4
let E = 10**5;
let F = 9**6;
console.log(E > F);

//3.5
let G = 17 / 6;
let H = 4;
console.log(G <= H);

/* Conditionals */
/*
Problem 4:

create 3 vraiable name, age and price 
price should be 35
assign other values to them by using prompt
program should do the following:
1. if user is underage it should say so and price should be free (0)
2. if user's name is "James" and age is 25 then it should give them discount by 20%
3. any other case price should stay the same
4. log user's name, age and how much should they pay
*/

//#1
let firstName = 'Tamo';
let age = 29;
let price = 35;

if (age < 30) {
    console.log ('you are underage, price will be free ')
}
else {
    console.log ('price is 35gel')
}

//#2
firstName = 'James'
 age = 25
 price = 35

if (age < 30 && firstName.toLowerCase() == 'james') {
    console.log ('you have discount by 20%')
}

//#3
 firstName = 'Lile';
age = 32;
 price = 35;

if (age > 30) {
    console.log ('price is 35gel')
}


/* Arrays */
/*
Problem 5:

create an array that holds numbers from [-100, 100]
increment every single element by 1
*/
//ANSWER


/*
Problem 6:

cube every single element in previously created array
*/



/*
Problem 7:

create an array that holds user names (at least 10); firstNames
transform every element in the list (array) to lower case
*/


/*
Problem 8:

capitalize every element in previously created array
*/

/*
Problem 9:

create an array that holds user last names (at least 10); lastNames
transform every element in the list (array) to upper case
*/

/*
Problem 10:

create an array that will hold arrays of user names and last names; users
user previously created arrays (firstNames and lastNames arrays) and join them
to create new array like given in below example
EXAMPLE:
[
    ["name", "last name"], 
    ["name", "last name"]
]
*/

/*
Problem 11:

remove every user from the previously created array (users) 
that firstName starts with character 'a' 
and lastName contains character 'i' 
*/