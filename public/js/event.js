const handle = document.querySelector(".btnall");
handle.addEventListener ('click',handleArticleClick);
const articles = document.querySelector(".articlehandle");

function  handleArticleClick (event) {

    articles.classList.toggle('articles--open');
    
};



const button = document.querySelector(".category");
button.addEventListener('click',CategoryClick);
const Category = document.querySelector(".form");

function CategoryClick (event) {
 Category.classList.toggle('form--open');
}