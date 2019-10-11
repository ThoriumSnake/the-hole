var articleButtons = document.getElementsByClassName('art-button');
var header = document.getElementsByClassName('header')[0];
var footer = document.getElementsByClassName('footer')[0];
var initPageElements = [document.getElementsByClassName('header-inner'), document.getElementsByClassName('header-icon'), document.getElementsByClassName('buttons')];
var activeArticle;
var articlesWrapper = document.getElementsByClassName("articles")[0];

//For timing appearence of scrollbar alongside article
document.body.style.overflow = 'hidden';

function HideInitialPage(){
    //For fixing the position and opacity of some elements, because their animations are removed
    initPageElements[0][0].style.height = '30%';
    initPageElements[1][0].style.opacity = '1';
    initPageElements[1][0].style.top = '20%';
    document.getElementsByClassName('buttons')[0].style.top = '80%';

    setTimeout(function(){
        header.style.display = 'none'
        footer.style.display = 'none'
    }, 750);

    if(header.classList.contains('article-not-visible'))
        header.classList.remove('article-not-visible');
        footer.classList.remove('article-not-visible');

    header.classList.add('article-is-visible');
    footer.classList.add('article-is-visible');
    
    header.style.opacity = '0';
    footer.style.opacity = '0';

    for (let i = 0; i < initPageElements.length; i++) {
        initPageElements[i][0].style.animation = 'none';  
    }
}

function ShowInitialPage(){
    header.style.display = 'block'
    footer.style.display = 'block'
        //initPageElements[i][0].classList.remove("article-is-visible");
    header.classList.add("article-not-visible");
    footer.classList.add("article-not-visible");
    
    header.classList.remove("article-is-visible"); 
    footer.classList.remove("article-is-visible");           
}

function ShowArticle(){
    articlesWrapper.style.display = 'flex'
    articlesWrapper.classList.add('article-fade-in');
    activeArticle.style.display = 'initial'
}

function CloseArticle(){
    articlesWrapper.classList.add('article-fade-out');
    document.body.style.overflow = 'hidden';
    setTimeout(function(){
        articlesWrapper.style.display = 'none'
        activeArticle.style.display = 'none'
        articlesWrapper.classList.remove('article-fade-in');
        articlesWrapper.classList.remove('article-fade-out');
    }, 250);
}

function AddButtonListeners(){
    for (let item of articleButtons){
        item.addEventListener('click', function(){
            activeArticle = document.getElementsByClassName(item.classList[1])[1]
            AddCloseButtonListener();
            HideInitialPage();

            setTimeout(function(){
                ShowArticle();
            }, 350)

            setTimeout(function(){
                document.body.style.overflow = 'visible';
            }, 700)
        });       
    }
}

function AddCloseButtonListener(){
    var closeBtn = null;
    for (var i = 0; i < activeArticle.childNodes.length; i++) {
        if (activeArticle.childNodes[i].className == 'close') {
        closeBtn = activeArticle.childNodes[i];
        break;
        }        
    }
    closeBtn.addEventListener('click', function(){
        CloseArticle();
        //For allowing article fade out animation to play
        setTimeout(function(){
            ShowInitialPage();
        }, 200)
    })
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