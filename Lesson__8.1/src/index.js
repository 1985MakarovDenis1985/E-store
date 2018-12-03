import {Data, loud_products} from "./data";
import {Catalog} from "./catalog";
import {Pagination} from "./pagination";
import {Builder} from "./builder";
import {PageData} from "./pageData";
import {Login} from "./login";


if (localStorage.getItem("isLogin")) {
	const per_page = 6;

	const catalog = new Catalog(per_page);
	catalog.renderProducts(Data.setProducts(Data.loadProducts()),PageData.getCurrentPage());

	const pagination = new Pagination(per_page);
	pagination.createPag(Data.getProducts(),PageData.getCurrentPage())
}else{
	const login = new Login();
	login.createHtmlElement();
}

