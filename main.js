const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
//------------------------------------------------------------
//console.log(myHeading.textContent);

// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
//   });

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ai.png") {
    myImage.setAttribute("src", "images/exp.png");
  } else {
    myImage.setAttribute("src", "images/ai.png");
  }
};

//------------------------------------------------------------

let myButton = document.querySelector("button");
let myHeading1 = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading1.textContent = `Mozilla is cool, ${myName}`;
      }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  
  
//------------------------------------------------------------
const firstName = "bittu";
let lastName = "bittu";
let value = firstName == lastName;
console.log(value);
console.log(firstName === lastName);

console.log(!(value));

function multiply(num1, num2){
    return num1 * num2
}
console.log(multiply(23,1.5)); 

// npm install http-server -g
// to run the server: http-server -o