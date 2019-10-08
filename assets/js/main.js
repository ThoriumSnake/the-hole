var articleButtons = document.getElementsByClassName("art-button");
var elemArray = [document.getElementsByClassName("header-inner"), document.getElementsByClassName("header-icon"), document.getElementsByClassName("buttons"), document.getElementsByClassName("footer")];

function AddVisibilityClass(){
    for (let i = 0; i < elemArray.length; i++) {
        elemArray[i][0].classList.add("article-visible");       
    }
}

for (let item of articleButtons) {
    item.addEventListener('click', function(){
    //For fixing the position and opacity of some elements, because their animations are removed
    elemArray[0][0].style.height = "30%";
    elemArray[1][0].style.opacity = "1";
    elemArray[1][0].style.top = "20%";
    document.getElementsByClassName("buttons")[0].style.top = "80%";
    
    AddVisibilityClass();
    });
}