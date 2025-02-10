const handle = document.querySelector(".btnall")
handle.addEventListener ('click',handleArticleClick)
const articles = document.querySelector(".articlehandle")

function  handleArticleClick (event) {

    articles.classList.toggle('articles--open')
    
}