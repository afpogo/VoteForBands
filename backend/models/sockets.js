const BandList = require("./band-list");

class Sockets {
    constructor (io) {
        this.io = io;
        this.bandList = new BandList();
        this.conection();
    }

    conection() {
        // Esta es la conexion del Socket Server
        this.io.on('connection', ( socket ) => {
            console.log('Cliente Conectado');

            // Emitir al cliente conectado todas las bandas predefinidas en BandList
            socket.emit('band-list', this.bandList.getBands());

            // Escuchhando el evento 'vote-band' que incrementa el voto en +1
            socket.on('vote-band', ({id}) => {
                this.bandList.increaseVotes(id);
                // para que se actualice el dom en react es necesario volver a emitir las bandas
                // Aprovechamos y emitimos a todos los dispositivos con this.io
                this.io.emit('band-list', this.bandList.getBands());
            })

            socket.on('dalete-band',({id}) => {
                this.bandList.removeBand(id)
                this.io.emit('band-list',this.bandList.getBands());
            })

            socket.on('rename-band', ({id, name}) => {
                this.bandList.changeName(id, name);
                this.io.emit('band-list', this.bandList.getBands());
            })

            socket.on('add-band', ({name}) => {
                this.bandList.addBand(name);
                this.io.emit('band-list', this.bandList.getBands());
            })
        })
    }


}

module.exports = Sockets;