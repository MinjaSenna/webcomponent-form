// disable elements

const inputs = document.getElementById("login__form").elements; 
// Iterate over the form controls
 for (i = 0; i < inputs.length; i++) {
   // Disable all form controls
   inputs[i].setAttribute("disabled", "");
   }

  //



  // toimii vielä 

  const logAll = event => {
    event.preventDefault();
    const loginData = {}; 

    // Demo only: print the form data onscreen as a formatted JSON object.
  const dataContainer = document.getElementsByClassName('results__display')[0];
  dataContainer.textContent = JSON.stringify(loginData, null, "  ");

    var userName = document.getElementById("username");
    var passWord = document.getElementById("password"); 


    console.log(username.value);
    console.log(password.value); 
    
  }





















  /**
 * Retrieves input data from a form and returns it as a JSON object.
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */


const logAll = (event) => {
    event.preventDefault();
    const loginData = {}; 

    // Demo only: print the form data onscreen as a formatted JSON object.
  const dataContainer = document.getElementsByClassName('results__display')[0];
  dataContainer.textContent = JSON.stringify(loginData);
  };


 const loginForm = document.getElementById("login__form")[0];
 const userName = document.getElementById("username").value; 
 const passWord = document.getElementById("password").value; 
 loginForm.addEventListener("submit", logAll); 




 // THIS WORKS WOOHOOO 

 document.getElementById('login__form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const data = Array.from(formData.entries()).reduce((memo, pair) => ({
      ...memo,
      [pair[0]]: pair[1],
    }), {});
    document.getElementById('results__display').innerHTML = JSON.stringify(data);
  });









  class LoginData extends HTMLElement{
    constructor() {
    super(); 


    document.getElementById('login__form').addEventListener('submit', (e) => {
    e.preventDefault();

const formData = new FormData(e.target);
const data = Array.from(formData.entries()).reduce((memo, pair) => ({
  ...memo,
  [pair[0]]: pair[1],
}), {});
 console.log(JSON.stringify(data));
});
}} 

customElements.define("login-component", LoginData); 

console.log("HELLO!!!"); 























const template = document.createElement("template"); 
template.innerHTML = `
<label><b>Username</b></label>
<input type="text" placeholder="Enter Username" id="username" required>

<label><b>Password</b></label>
<input type="password" placeholder="Enter Password" id="password" required>
<button id="login-submit"> Login </button> 
`; 


class LoginData extends HTMLElement{
     constructor() {
     super(); 
     this.attachShadow({ mode: "open"}); 
     this.shadowRoot.appendChild(template.content.cloneNode(true)); 
     const buttonEl = this.shadowRoot.getElementById("login-submit"); 
    
  } 

   getValues = () => {
     const userName = this.shadowRoot.getElementById("username"); 
     const passWord = this.shadowRoot.getElementById("password"); 
     
     if(userName.value  === "") {
         alert("You must include a username"); 
         userName.focus(); 
     } else if (passWord.value === "" ) {
         alert("You must include your password"); 
         passWord.focus(); 
     } else {
         console.log(JSON.stringify(userName.value)); 
         console.log(JSON.stringify(passWord.value)); 
 
   
     } 
   }


 
 connectedCallback() {
     this.shadowRoot.getElementById("login-submit").addEventListener("click", () => {
         this.getValues(); 
        
       });
 }
 
 }; 

customElements.define("login-component", LoginData); 









const template = document.createElement("template"); 
template.innerHTML = `
<label><b>Username</b></label>
<input type="text" placeholder="Enter Username" id="username" required>

<label><b>Password</b></label>
<input type="password" placeholder="Enter Password" id="password" required>
<button id="login-submit"> Login </button> 
`; 


class LoginData extends HTMLElement{
     constructor() {
     super(); 
     this.attachShadow({ mode: "open"}); 
     this.shadowRoot.appendChild(template.content.cloneNode(true)); 
    
  } 

   getValues = () => {
     const userName = this.shadowRoot.getElementById("username").value; 
     const passWord = this.shadowRoot.getElementById("password").value; 
    
     console.log(JSON.stringify(userName)); 
     console.log(JSON.stringify(passWord)); 

   }
 
 
  
 connectedCallback() {
     this.shadowRoot.getElementById("login-submit").addEventListener("click", () => {
         this.getValues(); 
        
       });
 }
 
 }; 

customElements.define("login-component", LoginData); 



























const template = document.createElement("template"); 
template.innerHTML = `
<label><b>Username</b></label>
<input type="text" placeholder="Enter Username" id="username" required>

<label><b>Password</b></label>
<input type="password" placeholder="Enter Password" id="password" required>
<button id="login-submit"> Login </button> 
`; 


class LoginData extends HTMLElement{
     constructor() {
     super(); 
     this.attachShadow({ mode: "open"}); 
     this.shadowRoot.appendChild(template.content.cloneNode(true)); 

  } 



   getValues = () => {
     const userName = this.shadowRoot.getElementById("username"); 
     const passWord = this.shadowRoot.getElementById("password"); 
     const baseUrl = this.getAttribute("endpoint")

     if(userName.value  === "") {
         alert("You must include a username"); 
         userName.focus(); 
     } else if (passWord.value === "" ) {
         alert("You must include your password"); 
         passWord.focus(); 
     } else {
         var xhr = new XMLHttpRequest();
         var url = baseUrl;
         xhr.open("POST", url, true);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.onreadystatechange = function () {
         if (xhr.readyState === 4 && xhr.status === 200) {
         var json = JSON.parse(xhr.responseText);
         console.log(json.email + ", " + json.password);
 }
};
var data = JSON.stringify({"email": userName.value, "password": passWord.value});
xhr.send(data);
   
     } 
   }


 
 connectedCallback() {
     this.shadowRoot.getElementById("login-submit").addEventListener("click", () => {
         this.getValues(); 
        
       });
 }
 
 }; 

customElements.define("login-component", LoginData); 














const template = document.createElement("template"); 
template.innerHTML = `
<label><b>Username</b></label>
<input type="text" placeholder="Enter Username" id="username" required>

<label><b>Password</b></label>
<input type="password" placeholder="Enter Password" id="password" required>
<button id="login-submit"> Login </button> 
`; 


class LoginData extends HTMLElement{
     constructor() {
     super(); 
     this.attachShadow({ mode: "open"}); 
     this.shadowRoot.appendChild(template.content.cloneNode(true)); 

  } 



   getValues = () => {
     const userName = this.shadowRoot.getElementById("username"); 
     const passWord = this.shadowRoot.getElementById("password"); 
     const baseUrl = this.getAttribute("endpoint")

     if(userName.value  === "") {
         alert("You must include a username"); 
         userName.focus(); 
     } else if (passWord.value === "" ) {
         alert("You must include your password"); 
         passWord.focus(); 
     } else {
         var xhr = new XMLHttpRequest();
         var url = baseUrl;
         xhr.open("POST", url, true);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.onreadystatechange = function () {
         if (xhr.readyState === 4 && xhr.status === 200) {
         var json = JSON.parse(xhr.responseText);
         console.log(json.email + ", " + json.password);
 }
};
var data = JSON.stringify({"email": userName.value, "password": passWord.value});
xhr.send(data);
   
     } 
   }


 
 connectedCallback() {
     this.shadowRoot.getElementById("login-submit").addEventListener("click", () => {
         this.getValues(); 
        
       });
 }
 
 }; 

customElements.define("login-component", LoginData); 
