var articleButtons = document.getElementsByClassName("art-button");
var elemArray = [document.getElementsByClassName("header-inner"), document.getElementsByClassName("header-icon"), document.getElementsByClassName("buttons"), document.getElementsByClassName("footer")];

function HidePage(){
    //For fixing the position and opacity of some elements, because their animations are removed
    elemArray[0][0].style.height = "30%";
    elemArray[1][0].style.opacity = "1";
    elemArray[1][0].style.top = "20%";
    document.getElementsByClassName("buttons")[0].style.top = "80%";

    for (let i = 0; i < elemArray.length; i++) {
        elemArray[i][0].classList.add("article-visible");          
    }
}

for (let item of articleButtons) {
    item.addEventListener('click', function(){
        HidePage();
        document.getElementsByClassName("articles")[0].style.display = "initial";
        document.getElementsByClassName("articles")[0].classList.add("article-delay"); 
        document.getElementsByClassName(item.classList[1])[1].classList.add("article-delay");  
        document.getElementsByClassName(item.classList[1])[1].style.display = "initial" 
    })
}
/*document.getElementById("description-btn").addEventListener('click', function(){
    document.getElementsByClassName("description")[0].style.display = "initial";
    HidePage();
})

document.getElementById("report-btn").addEventListener('click', function(){
    document.getElementsByClassName("report")[0].style.display = "initial";
    HidePage();
})

document.getElementById("containment-btn").addEventListener('click', function(){
    document.getElementsByClassName("containment")[0].style.display = "initial";
    HidePage();
})*/