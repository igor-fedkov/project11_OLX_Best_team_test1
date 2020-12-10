import { Utils } from "handlebars";

export default class NewsApiService {

    constructor() {
    this.searchQuery = '';
    this.page = 1;       
    }
    
    fetchArticles() {
    
   const url=`https://callboard-backend.herokuapp.com/call/find?search=${this.searchQuery}`;
        
   return fetch(url)
            .then(response => response.json())
            .then(item => console.log(item))
            .catch(error => console.log(error.message));
            
    }
     
  incrementPage() {
    this.page += 1;
  }
  
  resetPage() {
    this.page = 1;
  }
  
  get query() {
    return this.searchQuery;
  }
  
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  }