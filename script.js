/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */


class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    // print() {
    //     console.log(`${this.title} ${this.director} ${this.budget}`)
    // }

    wasExpensive(extra = "default") {

        if (extra <= this.budget) {
            console.log(true,
                ' Title: '
                + this.title + ' / Director:'
                + this.director + ' / Budget: '
                + this.budget + ' mln USD dolar'
            )
        } else {
            console.log(false, `Movie budget less than ${extra} mln USD dolar`)
        }
    }
}

const newMovie = new Movie("Poker Face", " Russell Crowe", 107000000)
// newMovie.print()

newMovie.wasExpensive(100000000)

