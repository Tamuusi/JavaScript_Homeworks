/* თითოეულ საკითზე გაეცით პასუხი და მოიყვანეთ მაგალითები! */



/* variables */
//რა არის ცვლადი (variable)?/;
       //ANSWER:
// VARIABLE (ცვლადები - რაღაც მნიშვნელობის მინიჭება)
let firstName = "Jame"; 
//(let-ით შექმნილი ცვლადის შეცვლა შეაძლებელია)
var lastName = "Doe"; 
//(var - შედარებით ძველი ხერხია და აღარ გამოიყენება)
const LastName = "Doe"; 
//(const -ით შექმნილი ცვლადი აღარ იცვლება)



//რა არის მინიჭების ოპერატორი (assignment operator)?/;
    //ANSWER:
 //  მინიჭების ოპერატორი არის =
 let x = 5;
console.log(x);



//რა არის მნიშვნელობა (value)?/;
        //ANSWER:
//ცვლადისთვის მინიჭებული რაღაც კონკრეტული მნიშვნელობა. მაგ:
let CarName = "Subaru";
console.log(CarName);
// subaru - value



/* conditionals */
//რას ეწოდება კოდის ბლოკი (code block)?/;
          //ANSWER:
//code-block / code fragment ანუ ფრჩხილებში შექმნილი ცვლადები არ გადის გარეთ

let userName = "tamo"
console.log(userName); 
 //არ დაიპრინტება ფრჩხილებს გარეთ, თუ არ შესრულდა რაიმე კონკრეტული პირობა (მაგ: if/else შემთხვევაში)



//რა არის [if | else | else if]?/;
 //ANSWER:
//conditionals
// IF არის აუცილებელი კომპონენტი; else / else if შეგვიძლია გამოვიყენოთ საჭიროების მიხედვით; პირობის შესრულება იწყება ზედა ხაზიდან.
let age = 30;
if (age < 20) {
    console.log ('Underage! you cannot enter this site!');
}
else if (age > 55) {
    console.log('overage! you cannot enter this site!');
}
else {
    console.log("You may enter!");
}


//როგორ მუშაობს: [და, ან, არა] ოპერატორები (and, or, not)?/;
        //ANSWER:
//boolean_operators : 
let isRaining = false;
let isWindy = true;
let isSunny = true;
// and && (და) პირობის დასაკმაყოფილებლად, ორივე უნდა იყოს ერთი მნიშვნელობის-> F+F=F; F+T=F; T+F=F; T+T=T;
console.log(isWindy && isSunny);
// OR || (ან) პირობისთვის საკმარისია ერთ-ერთი მაინც აკმაყოფილებდეს პირობას -> F+F=F; F+T=T; T+T=T; F+F=T;
console.log(isRaining || isWindy);
// NOT ! (არა) პირობის შემთხვევაში ხდება პირობის შებრუნება -> False გადაკეთდება True, და პირიქით.
console.log(!isRaining && isWindy);
//expresion 2ზე მეტ გამოსახულებიან შემთხვევაში შეფასება იწყება მარჯვენა ორიდან და მოყება მარცხნივ რიგითობით
console.log(isRaining && isWindy && !isSunny);



//როგორ მუშაობს switch (case და default)?/;
        //ANSWER:
  






/* array */
//ახსენით რა არის და რისთვის გამოიყენება მონაცემთა სტრუქტურები (data structures)?/;
        //ANSWER:
 

//რა არის მასივი (array)?/;
        //ANSWER:
 //array - ელემენტების ერთობლივად (ერთ ცვლადში) შენახვა. 
const products = [
    "mascara", "lipGloss", "eyeShadow",
];
console.log(products);

//for ციკლის დახმარებით (ჩამონათვალის სახით დაპრინტვა)
// const products = [
//    "mascara", "lipGloss", "eyeShadow",
// ]
// console.log(products.length);
// for (let i = 0; i < products.length; i++){
//     console.log(products[i])
// }



//როგორ ხდება მასივის მანიპულირება [წვდომა, წაშლა, ჩამატება, შეცვლა]?/;
        //ANSWER:

//პროდუქტის ჩამატება(ამატებს ბოლოდან)
//products.push("blush");

//პროდუქტის ამოგდება (აგდებს ბოლოდან)
//products.pop()

//შეცვლა
// products[0] = "lipGloss" (ჩამონათვალში გადაიტანს პირველ ადგილზე)

//წვდომა
//console.log(products[0])


/* loops */
//რა არის ციკლი?/;
        //ANSWER:
//Loops - ციკლები (კოდის მონაკვეთი, რომელიც რამდენჯერმე უნდა გამეორდეს)


//რა არის იტერაცია იგივე ბიჯი?/;
        //ANSWER:


//როგორ მუშაობს for ციკლი?/;
        //ANSWER:
       
        // let num = 1;
        // for (let i = 1; საწყისი
        //      i < 10; სადამდე შეუძლია ასვლა
        //      i++) { როგორ იმოქმედოს
        //     num += i; 
        // }
        // console.log(num);

//როგორ მუშაობს while ციკლი?/;
        //ANSWER:



//რა სხვაობაა [break -ს და continue -ს] შორის?/;
        //ANSWER:
//Break - კონკრეტული პირობის შესრულებისას, პროცესის შეწყვეტა (ციკლიდან გამოსვლა)
//continue - აბრუნება whileში



/* functions */
//რა არის ფუნქცია და როგორ მუშაობს ის?/;
// ANSWER:
//კოდის ფრაგმენტი, რომელიც სრულდება გამოძახების შემთხვევაში.



//რა არის ფუნქციის ტანი (function body)?/;



//რას ნიშნავს ფუნქციის განსაზღვრა (definition)?/;
//ANSWER:
//  function click() {
//  console.log('hello world') <-ფუნქციის განსაზღვრა
//  }


//რა არის ფუნქციის გამოძახება (call, invoke)?/;
// ANSWER:
// function click() <-ფუნქციის გამოძახება
// {
// console.log('hello world')
// }


//რა არის პარამეტრები?/;
//ANSWER:
//ცვლადი, რომელიც იქმნება ფუნქციის გამოძახების მომენტში:
// function click(tskap)  <- tskap არის პარამეტრი :)
// {
// console.log('hello world')
// }


//რა არის default პარამეტრი?/;


//რა უნდა გავითვალისწინოთ default პარამეტრის გამოყენებისას?/;


//რას ნიშნაბს ფუნქციის დასაბრუნებელი მნიშვნელობა (return value)?/;
//ANSWER:
//როდესაც ფუნქცია მიაღწევს დასაბრუნებელ მნიშვნელობას, ის წყვეტს შესრულებას და აბრუნებს კონკრეტულ, მითითებულ პასუხს.
function click(tskap='damawkape') {
return ' well Done ' + tskap;
}
console.log(click('dawkapeba'))


//ახსენით ხილვადობები (local scope vs global)/;
//ANSWER:
//local scope ცვლადები იქმნება ფრჩხილებში და ვერ მივწვდებით მის გარეთ. (ეკუთვნის მხოლოდ იმ 1 კონკრეტულ ფუნქციას)
//GLOBAL - ფრჩხილებს გარეთ განსაზღვრული ცვლადი,



//რა არის shadowing?/;
//გადაფარვა, LOCAL SCOPE ფარავს global scope-ს (უფრო ძლიერია ფუნქციისთვის)



//რა არის რეკურსია?/;
//answer:
//ფუნქციაში თaვისივე ფუნქციის გამოძახება



/* objects */

//რა არის ობიექტი (object)?/;

// /არის თუ არა object-ი მონაცემთა სტრუქტურა?/;

// /რა არის properties?/;

// /რა არის მეთოდი და რითი განსხვავდება ფუნქციისგან?/;

// /როგორ მუშაობს this?/;
