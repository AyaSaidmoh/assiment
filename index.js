



var quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing. ",
    "Your time is limited, so don't waste it living someone else's life. ",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more.",
    "It is during our darkest moments that we must focus to see the light. ",
    "Do not go where the path may lead, go instead where there is no path and leave a trail."
];
var authors = [
    "Nelson Mandela",
    "Walt Disney",
    "Steve Jobs",
    "Eleanor Roosevelt",
    "Oprah Winfrey",
    "Aristotle",
    "Ralph Waldo Emerson"
];
function displayData() {
    var randomIndex = Math.round(Math.random() * (quotes.length - 1));
    var randomQuote = quotes[randomIndex];
    var randomAuthor = authors[randomIndex];

   
    document.getElementById("demo").innerText = randomQuote;
    document.getElementById("author").innerText = `- ${randomAuthor}`;
}