const quotes = [
    {
        quote: "명언1",
        author: "작성자1"
    },
    {
        quote: "명언2",
        author: "작성자2"
    },
    {
        quote: "명언3",
        author: "작성자3"
    },
    {
        quote: "명언4",
        author: "작성자4"
    },
    {
        quote: "명언5",
        author: "작성자5"
    },
    {
        quote: "명언6",
        author: "작성자6"
    },
    {
        quote: "명언7",
        author: "작성자7"
    },
    {
        quote: "명언8",
        author: "작성자8"
    },
    {
        quote: "명언9",
        author: "작성자9"
    },
    {
        quote: "명언10",
        author: "작성자10"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todayQiote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText =  todayQiote.quote;
author.innerText =  todayQiote.author;