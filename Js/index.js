var quotes = [
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    author: " Oscar Wilde",
    quote: "We are all in the gutter, but some of us are looking at the stars.",
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
  {
    author: "Elbert Hubbard",
    quote: "A friend is someone who knows all about you and still loves you.",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
  },
  {
    author: "Albert Einstein",
    quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
  },
];

var lastNumber = -1;
function randquoute() {
  var random = Math.floor(Math.random() * (quotes.length - 0) + 0);

  while (random === lastNumber) {
    random = Math.floor(Math.random() * (quotes.length - 0) + 0);
  }

  lastNumber = random;
  document.getElementById(
    "quoteOutput"
  ).innerText = `\" ${quotes[random].quote}\ "`;
  document.getElementById(
    "authorOutput"
  ).innerText = `-- ${quotes[random].author}`;
  console.log(random);
}
randquoute();
