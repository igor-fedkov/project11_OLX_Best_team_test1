// import '../SEARCH-MODAL/search-modal.css';
import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';
import cardTpl from '../SEARCH-MODAL/cardSM.hbs';
import NewsApiService from './apiSN';



defaults.delay = 100;
defaults.icon = false;


const refs={
    searchBtn:document.querySelector('#search-modal'),
    searchForm:document.querySelector('#search-form'),
    container:document.querySelector('.card-field')
}

const newsApiService =new NewsApiService();

refs.searchBtn.addEventListener('click',onClickSearch);
refs.searchForm.addEventListener('submit', onSearch);


function onSearch(e) {  
  e.preventDefault();

  newsApiService.query = e.target.value;
//currentTarget.elements.query
   if (newsApiService.query === '') {
    
    return error('Enter search parameters!');   
  }
  newsApiService.resetPage();
  clearContainer();
  document.getElementById('input').value = "";
   newsApiService.fetchArticles().then(div => {
    appendMarkup(div);
    newsApiService.incrementPage(); 
  } );
}

function appendMarkup(e) {
  refs.container.insertAdjacentHTML('beforeend', cardTpl(e));
}


function clearContainer() {
  refs.container.innerHTML = '';
}

function onClickSearch(
    e){
  
  if (e.target.nodeName!='BUTTON'){
    return;
  }
  const src=e.target.dataset.src;
  console.log(src);
  const instance=basicLightbox
  .create(
    `
    <div class="modal">
       <div class="fone-modal" > 
       <button class="aBtn"><svg class="icon-c">
       <use href="../symbol-defs.svg#icon-close"></use>
     </svg></button>
     <form class="search-form" id="search-form">
        <input id ='input' class="input-search" placeholder="Пошук"> 
        <button type="submit" class="bBtn"><svg class="icon-s">
       <use href="../symbol-defs.svg#icon-search"></use>
     </svg> </button> 
     </input>     
        </div>
    </div>
    </form> 
`, {
    onShow: (instance) => {
        instance.element().querySelector('.aBtn').onclick = instance.close
    }
}
  );
  console.dir(instance);
  instance.show();
  }