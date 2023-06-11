let poemsUrl = 'https://gist.githubusercontent.com/ShalyDev/77f5a3425380e78c4ff3f434fb1d0bfe/raw/c290e0b80f05c7d2da223a26dc1d7de7f3daba27/data.json';
let poem = document.getElementById("poem");

function getFal() {
    fetch(poemsUrl, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            let randomNum = Math.floor(Math.random() * (data.poems.length));
            poem.innerHTML = data.poems[randomNum].poem;
            let fal = poem.innerHTML;
            $('#tweet-poem').attr(
                'href',
                'https://twitter.com/intent/tweet?&text=' +
                encodeURIComponent('' + fal + '')
            );
        })
        .catch(errorMsg => { console.log(errorMsg); });
};



$(document).ready(function () {
    return (
        poem.innerHTML = ".برای دیدن فال خود، روی دکمه «فال جدید» کلیک کنید"
    )
})


$('#new-poem').on('click', getFal);