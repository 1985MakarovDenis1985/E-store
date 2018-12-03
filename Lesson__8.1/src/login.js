

import {Builder} from "./builder";

export class Login {
	constructor(per_page){
		this.element = document.getElementById("login_container");
	}

	createHtmlElement() {

		let labelEmail = Builder.createNewElement("label", "Email address", "", [{"name": "for", "value": "exampleInputEmail1"}]);
		let emailInputEmail = Builder.createNewElement("input", "", "form-control", [
			{"name": "type", "value": "email"},
			{"name": "id", "value": "exampleInputEmail1"},
			{"name": "aria-describedby", "value": "emailHelp"},
			{"name": "placeholder", "value": "Enter email"}
		]);
		let smallEmail = Builder.createNewElement("small", "We'll never share your email with anyone else.", "form-text text-muted", [{"name": "id", "value": "emailHelp"}]);
		let divEmail = Builder.attachChilderToParent(Builder.createNewElement("div", null, "form-group"), [labelEmail, emailInputEmail, smallEmail]);



		let labelPass = Builder.createNewElement("label", "Password", "", [{"name": "for", "value": "exampleInputPassword1"}]);
		let emailInputPass = Builder.createNewElement("input", "", "form-control", [
			{"name": "type", "value": "password"},
			{"name": "id", "value": "exampleInputPassword1"},
			{"name": "placeholder", "value": "Password"},

		]);
		let divPass = Builder.attachChilderToParent(Builder.createNewElement("div", null, "form-group"), [labelPass, emailInputPass]);
		const button = Builder.createNewElement("button", "Login", "btn btn-primary", [{"name": "type", "value": "submit"}]);


		let form = Builder.attachChilderToParent(Builder.createNewElement("form", null, null,[{"name": "id", "value": "login_form"}]), [divEmail, divPass, button]);

		this.element.appendChild(form);

		document.getElementById("login_form").addEventListener("submit", this.submit, false);
	}

	submit(e){
		e.preventDefault();

		console.log(e.target[0].value);
		// console.log(e.target[1].value);

		console.log(/[a-zA-Z]/.test(e.target[0].value));
		// console.log(/^\w{3,12}$/i.test(e.target[1].value));



		// localStorage.setItem("isLogin", true); // // сохраняем данные в local storage
	}
}

// /^\w{2,12}$/i.test("azaa") ////test на кол символов