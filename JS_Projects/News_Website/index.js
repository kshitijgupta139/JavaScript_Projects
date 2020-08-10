console.log("This is my index js file");

// // Initialize the news api parameters
// let country = 'in';
// let apiKey = 'd38ad506c3e7d4c15996228b61194edda'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&apiKey=38ad506c3e7d4c15996228b61194edda`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card" style=" background-image: url('newspaper.jpg');">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function(){

//     let inputVal = search.value;
//     // console.log('Input event fired!', inputVal);
//     let cards = document.getElementsByClassName('card');
//     Array.from(cards).forEach(function(element){
//         let cardTxt = element.getElementsByTagName("div")[0].innerText;
//         if(cardTxt.includes(inputVal)){
//             element.style.display = "block";
//         }
//         else{
//             element.style.display = "none";
//         }
//         // console.log(cardTxt);
//     });
// });

xhr.send()


