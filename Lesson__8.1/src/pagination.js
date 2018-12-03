import {Builder} from "./builder";
import {Catalog} from "./catalog";
import {PageData} from "./pageData";
import {Data} from "./data";


export class Pagination {

	constructor(per_page) {
		this.element = document.getElementById("pagination");
		this.pag_buttons = document.getElementsByClassName("page-link");
		this.per_page = per_page;
	}


	createPag(array_products, current) {
		let link, li, ul;
		let activeEl;

		this.element.innerHTML = ""; // add

		ul = Builder.createNewElement("ul", null, "pagination");
		for (let i = 0; i < Math.ceil(array_products.length / this.per_page); i++) {
			link = Builder.createNewElement("a", i + 1, "page-link", [{"name": "data-link", "value": i}]);

			activeEl = (i == current) ? "page-item active" : "page-item";
			li = Builder.attachChilderToParent(Builder.createNewElement("li", null, activeEl), [link]);
			ul.appendChild(li);
		};

		this.element.appendChild(ul);
		const catalog = new Catalog(this.per_page);

		Array.from(this.pag_buttons).map((el) => {
			el.addEventListener("click", (e) => {
				console.log(e.target.dataset.link);
				PageData.setCurrentPage(e.target.dataset.link);
				catalog.renderProducts(Data.setProducts(Data.loadProducts()),PageData.getCurrentPage());
			});
		});
	};
}