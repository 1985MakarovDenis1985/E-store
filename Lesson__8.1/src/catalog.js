import {Builder} from "./builder";
import {Pagination} from "./pagination";
import {Data} from "./data";
import {PageData} from "./pageData";


export class Catalog {
	constructor(per_page){
		this.element = document.getElementById("catalog");
		this.per_page = per_page;
		this.catalog = catalog;
	}

	createCard(product) {

		let link = Builder.createNewElement("a", "Add to cart", "btn btn-primary add_card", [{"name": "href", "value": "#"}]);
		link.setAttribute("name",product.data);


		let p = Builder.createNewElement("p", product.description, "card-text");
		let title = Builder.createNewElement("h5", product.name, "card-title");
		let coast = Builder.createNewElement("h3", "$ " + product.price, "");


		let cardBody = Builder.attachChilderToParent(Builder.createNewElement("div", null, "card-body"), [title, p, coast,link]);

		// cardBody.appendChild(link)


		let image = Builder.createNewElement("img", null, "card-img-top", [{
			"name": "src",
			"value": "images/" + product.image
		}, {"name": "alt", "value": product.name}]);

		let card = Builder.attachChilderToParent(Builder.createNewElement("div", null, "card"), [image, cardBody]);

		let catalogItem = Builder.attachChilderToParent(Builder.createNewElement("div", null, "col-lg-3 col-md-6 mb-2 catalog-item"), [card]);

		return catalogItem;
	};

	firstI() {
		return this.current * this.per_page;
	};

	secondI(i,array_products) {
		return i < this.current * this.per_page + this.per_page && i < array_products.length;
	};

	renderProducts(array_products,current) {
		this.element.innerHTML = "";
		this.current = current;
		for (let i = this.firstI(); this.secondI(i,array_products); i++) {
			this.element.appendChild(this.createCard(array_products[i]));
		};
		const pagination = new Pagination(this.per_page);
		pagination.createPag(Data.getProducts(),PageData.getCurrentPage())


		////POU-PAP
		// CreatePouPap()
	};
}


