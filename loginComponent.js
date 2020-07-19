const template = document.createElement("template");
template.innerHTML = `
<style> 

   .login-component {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
   }

    #login-submit {
        background:linear-gradient(to bottom, #44c767 5%, #5cbf2a 100%);
        background-color:#44c767;
        border-radius: 1rem;
        border:1px solid #18ab29;
        cursor:pointer;
        color:#ffffff;
        padding: .6em;
        margin: 1rem; 
        width: 10rem; 
        text-decoration:none;
        text-shadow:0px 1px 0px #2f6627;
    }
    #login-submit:hover {
        background:linear-gradient(to bottom, #5cbf2a 5%, #44c767 100%);
        background-color:#5cbf2a;
    }

    input {
        border: none; 
        border-bottom: 2px solid #44c767;
        height: 1.5rem; 
        margin: 10px; 
    }


</style> 
<section class="login-component">
<h2 class="results__heading">Log in to your account </h2>
<span class="username-input"> 
<label><b>Username: </b></label>
<input type="text" placeholder="Enter Username" id="username" required>
</span> 
<span class="password-input"> 
<label><b>Password: </b></label>
<input type="password" placeholder="Enter Password" id="password" required>
</span> 
<button id="login-submit" type="submit"> Login </button> 
</section> 
`;

class LoginData extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  sendLoginData = () => {
    const userName = this.shadowRoot.getElementById("username");
    const passWord = this.shadowRoot.getElementById("password");
    const loginButton = this.shadowRoot.getElementById("login-submit");
    if (userName.value === "") {
      alert("You must include a username");
      userName.focus();
    } else if (passWord.value === "") {
      alert("You must include your password");
      passWord.focus();
    } else {
      alert(
        "Hey there 👋🏻 The endpoint doesn't exist, but the login data is being sent out as a payload in JSON form. "
      );
      var request = new XMLHttpRequest();
      const url = "https://localhost:3000/signin";
      request.open("POST", url, true);
      request.setRequestHeader("Content-Type", "application/json");
      request.onreadystatechange = function () {
        if (request.readyState === 3) {
          loginButton.setAttribute("disabled", true);
        } else if (request.readyState === 4 && request.status === 200) {
          loginButton.setAttribute("disabled", false);
        }
      };
      var data = JSON.stringify({
        email: userName.value,
        password: passWord.value,
      });
      request.send(data);
    }
  };

  connectedCallback() {
    this.shadowRoot
      .getElementById("login-submit")
      .addEventListener("click", () => {
        this.sendLoginData();
      });
  }
}

customElements.define("login-component", LoginData);
