//Assigning variables to calculate, the elements displaying on the creen, the buttons, and the API related alements.

const income = 100;
let bankBalance = null;
let loan = null;
let paymentAccount = null;

const salleryDisplay = document.getElementById("salleryDisplay");
const moneyInTheBank = document.getElementById("moneyInTheBank");
const yourLoan = document.getElementById("yourLoan");

const loanButton = document.getElementById("loanButton");
const payButton = document.getElementById("payButton");
const payLoanBack = document.getElementById("payLoanBack");
const bankButton = document.getElementById("bankButton");
const buyButton = document.getElementById("buyButton");
const payLoanWithSalleryButton=document.getElementById("payLoanWithSalleryButton");

const laptopName = document.getElementById("laptopName");
const laptopSpecs = document.getElementById("laptopSpecs");
const laptopDesciption = document.getElementById("laptopDescription");
const laptopImage = document.getElementById("laptopImage");
        laptopImage.height = "300";
        laptopImage.width = "300";
const laptopPrice = document.getElementById("laptopPrice");
const laptopsElement = document.getElementById("laptops");
let laptops = [];

// These buttons are hidden until thei funtion are needed. Look for them in the functions.
payLoanBack.hidden = true;
payLoanWithSalleryButton.hidden = true;


// Henter apien, forteller at dataen forventes å være json.
// legger api arrayen inn i den tommen definerte arrayen laptaps
// funksjonene addeLaptopsToStore blir kalt på.

//Get API, tells that the data is expected to be in json format.
// put the API array into the epmpy array laptops.
// the funtion addLaptopsToStore is called.
fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
    .then((response) => response.json())
    .then(data => laptops = data)
    .then(laptops => addLaptopsToStore(laptops));


// Creates all the elements for the array laptops.    
// displays the first element of the array and that element's features.

// går til funksjonen addLaptopToStore for hvert for hvert objekt som er i laptops arrayen.
   //etter at addLaptopToStore har kjørt, så blir dataen til index 0 i rarrayen lagt til på skjermen ved å linke dem til id fra html elementene,

// for easch object that are in the laptops array it goes to the function addeLaptopToStore (lop)
    // after addeLaptopToStore funtion is run, the date of the array's index 0 is added to the screen by linking with the ID if html elements.
    const addLaptopsToStore = (laptops) => {
      laptops.forEach(x => addLaptopToStore(x));
      laptopPrice.innerHTML = laptops[0].price;
      laptopDesciption.innerHTML = laptops[0].description;
      laptopName.innerHTML = laptops[0].title;
      laptopSpecs.innerHTML = laptops[0].specs.join(" <br> "); 
      laptopImage.src = "https://noroff-komputer-store-api.herokuapp.com/" + laptops[0].image;
     }

 
//The different elements of the laptops array are created here.

// for hvert objekt i arrayen laptops blir til et valg i select menyen, og hvert element for navn etter laptop.title.

// for each object in laptops array becomes an option/choice in the SELECT menu, and every element get the name from laptops.title.
  const addLaptopToStore = (laptop) => {
    const laptopElement = document.createElement("option");
      laptopElement.value = laptop.id;
      laptopElement.appendChild(document.createTextNode(laptop.title));
      laptopsElement.appendChild(laptopElement);
}


// Her blir de ulike html elementene på skjermen oppdatert når når man velger pc fra selecten.

// Here the HTML elements that display on the screen are updated when one chooses a computer fraom SELECT.
const laptopChange = e => {
  const selectedLaptop = laptops[e.target.selectedIndex];
  laptopPrice.innerHTML = selectedLaptop.price + " kr";
  laptopName.innerHTML = selectedLaptop.title;
  laptopDesciption.innerHTML = selectedLaptop.description;
  laptopSpecs.innerHTML = selectedLaptop.specs.join(" <br> ");


// Fil typen på element 5 er feil i api'en. Derfor blir det korrigert her.

// The file type of element 5 in the API in Image, is wrong. It is set to jpg, but is is png. Have to use a whole if statement to correct this.
  if ( selectedLaptop.image === "assets/images/5.jpg"){
      selectedLaptop.image = "assets/images/5.png"
  };
        laptopImage.src = "https://noroff-komputer-store-api.herokuapp.com/" + selectedLaptop.image;
  }


// This eventlistener is looking for changes related to the different elements of the API, excecuting the function laptopChange when that happens.
laptopsElement.addEventListener("change", laptopChange);

//This button let the user buy the selected computer if the requerments of the if statment is met.
buyButton.addEventListener("click", (e) => {
  if(Number(laptopPrice.innerHTML) < bankBalance){
    bankBalance = bankBalance - Number(laptopPrice.innerHTML)
    moneyInTheBank.innerHTML = bankBalance;
    window.alert("Congratulation with your new migthy laptop")
  }
    else{
     window.alert("You do not have enought money to buy this laptop.")
}});

// Recive salary in the paymentAccount by clicke on the button. Salary is alterent depending on if user have a loan or not-
payButton.addEventListener("click", (e) => {
  if(loan > 0){
    paymentAccount = paymentAccount + (income - 10);
    loan = loan - (income - 90);
    yourLoan.innerHTML = "Your loan is: " + loan;
    salleryDisplay.innerHTML = paymentAccount;
  }
    else{
      paymentAccount = paymentAccount + income
      salleryDisplay.innerHTML = paymentAccount;
}});

//"Move" the money from the paymentAccount to the bank account. AND set the payment accout back to 0.
bankButton.addEventListener("click", (e) => {
  bankBalance = bankBalance + paymentAccount;
  moneyInTheBank.innerHTML = bankBalance 
  salleryDisplay.innerHTML = 0;
  paymentAccount = 0;
});

// Using if/else statments to check if the loan the user request is allowed. In order to compare the input from the user, it had to be "converted" to a number.
loanButton.addEventListener("click", (e) => { 
const userRequestLoan = Number(window.prompt( "How much do you want to lend?"))  
  if( userRequestLoan > (bankBalance *2)) {
    loan = 0;
    window.alert("You can not lend more than what you currently have in your bank account.");
  }
    else if ( userRequestLoan <= (bankBalance*2)) {
      loan = userRequestLoan;
      yourLoan.innerHTML = "Your loan is: " + loan;
      bankBalance = bankBalance + loan;
      moneyInTheBank.innerHTML = bankBalance;
      payLoanBack.hidden = false;
      payLoanWithSalleryButton.hidden = false;
      loanButton.disabled = true;
    } 
      else {
        window.alert("Error! You are doing something wrong...")
}});

// This button only appair once the user have a loan. By clicking and if the requerments of the if statement are met, the user pay the loan with the money in the bankBalance.
payLoanBack.addEventListener("click", (e) =>{
  if (bankBalance > loan){
    bankBalance = bankBalance - loan;
    moneyInTheBank.innerHTML = bankBalance
    yourLoan.innerHTML = "";
    loan = 0;
    payLoanBack.hidden = true;
    payLoanWithSalleryButton.hidden = true;
    loanButton.disabled = false;
  }
    else{
      window.alert("You do not have hav enought money in the bank to pay down your loan.")
}});

//This button only appair once the user have a loan. By clicking and if the requerments of the if statement are met, the user pay the loan with the money in the paymentAccount.
payLoanWithSalleryButton.addEventListener("click", (e) => {
  if (paymentAccount > loan){
    paymentAccount = paymentAccount - loan
    salleryDisplay.innerHTML = paymentAccount;
    yourLoan.innerHTML = "";
    loan = 0;
    payLoanBack.hidden = true;
    payLoanWithSalleryButton.hidden = true;
    loanButton.disabled = false;
  }
    else{
      window.alert("You do not have hav enought money in your salary account to pay down your loan.")
}});