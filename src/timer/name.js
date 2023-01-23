// function namer(name) {
//   console.log(name);
// }

// const namer2 = name => console.log(name);

// console.log(this);
// setTimeout(()=> {console.log(`Hello - this - ${this?.toString()}`)}, 1000);
// namer('nan');

// namer2('hello');
// console.log(this);

// class Movie{
//   constructor(title) {
//     this.title = title;
//   }
//   printTitle() {
//     console.log(this.title);
//   }
// }

// const movie1 = new Movie('Indiana Jones');
// const movie2 = new Movie('Casablanca');
// const movie3 = new Movie('Up');

// movie1.printTitle();
// movie2.printTitle();
// movie3.printTitle();

// class Movie{
//   constructor(genre) {
//     this.genre = genre;
//   }
//   printGenre() {
//     console.log(this.genre);
//   }
// }

// class Up extends Movie{
//   constructor(genre, title) {
//     super(genre);
//     this.title = title;
//   }
//   printGenre() {
//     console.log('PRINT FROM CHILD', this.genre)
//   }
//   printTitle() {
//     console.log('MOVIE TITLE FROM CHILD', this.title);
//   }
// }

// const movie1 = new Movie('ANIMATION');
// const movie2 = new Up('ANIMATION', 'Cryer');

// movie1.printGenre();
// movie2.printTitle();
// movie2.printGenre();
