const template = document.createElement("template");
template.innerHTML = `
<label><b>Username</b></label>
<input type="text" placeholder="Enter Username" id="username" required>

<label><b>Password</b></label>
<input type="password" placeholder="Enter Password" id="password" required>
<button id="login-submit"> Login </button> 
`;

class LoginData extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  getValues = () => {
    const userName = this.shadowRoot.getElementById("username");
    const passWord = this.shadowRoot.getElementById("password");

    if (userName.value === "") {
      alert("You must include a username");
      userName.focus();
    } else if (passWord.value === "") {
      alert("You must include your password");
      passWord.focus();
    } else {
      var request = new XMLHttpRequest();
      const url = "https://localhost:3000/signin";
      request.open("POST", url, true);
      request.setRequestHeader("Content-Type", "multipart/form-data");
      request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
          var json = JSON.parse(request.responseText);
          console.log(json.email + ", " + json.password);
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
        this.getValues();
      });
  }
}

customElements.define("login-component", LoginData);
