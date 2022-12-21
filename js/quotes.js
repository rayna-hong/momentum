const quotes = [
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "If you cannot fly then run, if you cannot run then walk, if you cannot walk then crawl, but whatever you do you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "The fastest way to change yourself is to hang out with people who are already the way you want to be.",
    author: "Reid Hoffman",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You don’t enjoy the trip any less if you run out of gas, but it sure makes the trip a lot more stressful.",
    author: "Tim O’Reilly",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen.",
    author: "Wayne Huizenga",
  },
  {
    quote:
      "The only thing worse than starting something and failing… is not starting something.",
    author: "Seth Godin",
  },
  {
    quote:
      "If you really want to do something, you’ll find a way. If you don’t, you’ll find an excuse.",
    author: "Jim Rohn",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

async function getQuote() {
  const fetched = await fetch("https://api.quotable.io/random");
  const data = await fetched.json();

  if (!fetched.ok) {
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  }

  quote.innerText = data ? data.content : todaysQuote.quote;
  author.innerText = data ? data.author : todaysQuote.author;
}

getQuote();
