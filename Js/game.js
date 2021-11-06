let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

btn.addEventListener('click', function(e) {
    let input = document.getElementById('userInput').value;
    e.preventDefault(); 
    if(input == 7) {
       window.onload = win();
    } else {
        window.onload = loose();
    }
}) 

function win() {
    const winStar = `<div class="rating">
    <img class="trophy" src="../Assets/trophy.svg">
    <img class="star_img yellow_star" src="../Assets/yellow_star.png">
    <img class="star" src="../Assets/blackstar.png">
    <img class="star" src="../Assets/blackstar.png">
    <img class="star" src="../Assets/blackstar.png">
    <img class="star" src="../Assets/blackstar.png">
    <input 
        class="rating-1" 
        max="5" 
        type="text" 
        value="1">
    </div>
    <img class="win" src="../Assets/star.svg">
    <p class="win_text">Very Nice</p>`
    
    document.querySelector('#outputtext').innerHTML = winStar;
    
}

function loose() {
    const looseStar = `<img class="loose" src="../Assets/star1.svg">
    <p class="loose_text">Oops Try again</p>`
    
    document.querySelector('#outputtext').innerHTML = looseStar;
    
}