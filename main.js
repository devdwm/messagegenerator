console.log("Stoic message generator");

const quote = (author, quote, source) =>  {
    return {
    _author:author,
    _quote: quote,
    _source: source,

    get quote(){
        return `${this._author} once said ${this._quote}, from ${this._source}`;
    }
    }
};

const quotes = [
    quote("Marcus Aurelius", "'You have power over your mind - not outside events. Realize this, and you will find strength.'", "Meditations"),
    quote("Marcus Aurelius", "'It is not death that a man should fear, but he should fear never beginning to live.'", "Meditations")
];

function returnRandomQuote(){
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
}

console.log(returnRandomQuote().quote);
