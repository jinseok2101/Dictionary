type Words = {
    [key: string]: string
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) { }
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    //add
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }
    //get
    get(term: string) {
        return this.words[term]
    }
    //delete
    delete(term: string) {
        if (this.words[term] !== undefined) {
            delete this.words[term]
        }
    }
    //update
    update(term: string, newDef: string) {
        if (this.words[term] !== undefined) {
            this.words[term] = newDef
        }
    }
    //showAll
    showAll() {
        Object.keys(this.words).forEach((term: string) => {
            console.log(`${term}: ${this.words[term]}`);
        });
    }
    //count
    count() {
        return Object.keys(this.words).length
    }
    //upsert
    upsert(word: Word) {
        this.words[word.term] = word.def
    }
    //exists
    exists(term: string) {
        if (this.words[term] !== undefined) {
            return true
        }
        else { return false }
    }
    //bulkAdd
    bulkAdd(words: Word[]) {
        words.forEach((word) => this.add(word))
    }
    //bulkDelete
    bulkDelete(terms: string[]): void {
        terms.forEach((term) => this.delete(term));
    }
}
