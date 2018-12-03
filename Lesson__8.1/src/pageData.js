let current = 0;

export class PageData {
	static getCurrentPage(){
		return current;
	}

	static setCurrentPage(current_page){
		return current = current_page;
	}
}