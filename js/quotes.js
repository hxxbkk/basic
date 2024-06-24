const quotes = [
  {
    quote: 'The only thing we have to fear is fear itself.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote:
      'In the end, we will remember not the words of our enemies, but the silence of our friends.',
    author: 'Martin Luther King Jr',
  },
  {
    quote: 'The best way to predict the future is to invent it.',
    author: 'Alan Kay',
  },
  {
    quote:
      'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    author: 'Ralph Waldo Emerson',
  },
  {
    quote: 'The journey of a thousand miles begins with one step.',
    author: 'Lao Tzu',
  },
  {
    quote:
      'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    author: 'Ralph Waldo Emerson',
  },
  {
    quote:
      'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    quote:
      'The only limit to our realization of tomorrow is our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote:
      'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.',
    author: 'Buddha',
  },
  {
    quote: 'Life is what happens when youre busy making other plans.',
    author: 'John Lennon',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
