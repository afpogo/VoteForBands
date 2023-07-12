const Band = require('./band');

// Las actualizaciones que tendran las bandas, como la lista de votos, agregar nuevas bandas, etc.
class BandList {
    constructor() {
        this.bands = [
            new Band('Clapton'),
            new Band('Metaliza'),
            new Band('I-Maiden'),
        ];
    }

    addBand(name) {
        const newBand = new Band(name);
        this.bands.push(newBand);
        return newBand;
    }

    removeBand(id) {
        this.bands = this.bands.filter(band => band.id !== id);
        return this.band;
    }

    getBands() {
        return this.bands;
    }

    increaseVotes(id) {
        this.bands = this.bands.map(band => {
            if(band.id === id) {
                band.votes += 1;
            }
            return band;
        })
    }

    // Cambio el nombre de cada banda
    changeName(id, newName) {
        this.bands = this.bands.map(band => {
            if(band.id === id){
                band.name = newName;
            }
            return band;
        })
    }
}

module.exports = BandList;