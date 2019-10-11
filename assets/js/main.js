var articleButtons = document.getElementsByClassName('art-button');
var initPageElements = [document.getElementsByClassName('header-inner'), document.getElementsByClassName('header-icon'), document.getElementsByClassName('buttons'), document.getElementsByClassName('footer')];
var activeArticle;
var articlesWrapper = document.getElementsByClassName("articles")[0];

function HideInitialPage(){
    //For fixing the position and opacity of some elements, because their animations are removed
    initPageElements[0][0].style.height = '30%';
    initPageElements[1][0].style.opacity = '1';
    initPageElements[1][0].style.top = '20%';
    document.getElementsByClassName('buttons')[0].style.top = '80%';

    for (let i = 0; i < initPageElements.length; i++) {
        initPageElements[i][0].classList.add("article-is-visible");          
    }

    document.getElementsByClassName('header')[0].style.display = 'none'
    document.getElementsByClassName('footer')[0].style.display = 'none'
}

function RevealArticle(){
    articlesWrapper.style.display = 'flex'
    articlesWrapper.classList.add('article-fade-in');

    activeArticle.style.display = 'initial'
}

function AddButtonListeners(){
    for (let item of articleButtons){
        item.addEventListener('click', function(){
            activeArticle = document.getElementsByClassName(item.classList[1])[1]
            HideInitialPage();
            RevealArticle();
        });
    }
}

AddButtonListeners();



















// function AddButtonListeners(){
//     for (let item of articleButtons) {
//         item.addEventListener('click', function(){
//             activeArticle = document.getElementsByClassName(item.classList[1])[1]
//             RemoveArtClasses();
//             HideInitialPage();
//             document.getElementsByClassName("articles")[0].style.display = "initial";
//             document.getElementsByClassName("articles")[0].classList.add("article-fade-in"); 
//             activeArticle.classList.add("article-fade-in");  
//             activeArticle.style.display = "initial" 
//         })
//     }
// }

// function AddCloseButtonListener(){
//         document.getElementsByClassName("close")[0].addEventListener('click', function(){
//             articles.classList.add("article-fade-out");
//             articles.classList.remove("article-fade-in");
            
//             activeArticle.classList.add("article-fade-out"); 
//             activeArticle.classList.remove("article-fade-in");
            
//             setInterval(function(){
//                 articles.style.display = "none";
//             }, 325)
            
//             for (let i = 0; i < initPageElements.length; i++) {
//                 initPageElements[i][0].classList.remove("article-is-visible");    
//                 initPageElements[i][0].classList.add("article-not-visible");     
//             }

//             for (let i = 0; i < initPageElements.length; i++) {
//                 setInterval(function(){
//                     initPageElements[i][0].style.animation = "none";
//                     initPageElements[i][0].classList.remove("article-not-visible");   
//                 }, 20000)                      
//             }
//     })
// }

// function RemoveArtClasses(){
//     if(articles.classList.contains("article-fade-out")){
//         articles.classList.remove("article-fade-out");
//         activeArticle.classList.remove("article-fade-out");}
// }

// AddButtonListeners();
// AddCloseButtonListener();