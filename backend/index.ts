import cors from 'cors';
import express, { Express } from 'express';
import { Server, Socket } from 'socket.io';
import http from 'http';
import dotenv from 'dotenv';
import { BandaLista } from './classes/BandaLista';

dotenv.config();

const listaBandas = new BandaLista();

// Instanciamos express
const app: Express = express();
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
// Creamos servidor socket en tiempo real
// Debemos crear un servidor http
const httpServer = http.createServer(app);
// Y luego crear un servidor de sockets basado en el servidor http anterior
const io = new Server(httpServer);

io.on('connection', (socket: Socket) => {
  console.log(socket.id);
  console.log('Cliente conectado');
  // Emitir al cliente conectado todas las bandas actuales
  socket.emit('current-bands', listaBandas.getBandas());

  // votar por la banda
  socket.on('votar-banda', (id: number) => {
    listaBandas.increaseVotes(id);
    io.emit('current-bands', listaBandas.getBandas());
  });

  // Borrar banda
  socket.on('borrar-banda', (id: number) => {
    listaBandas.removeBanda(id);
    io.emit('current-bands', listaBandas.getBandas());
  });

  // Cambiar nombre de la banda
  socket.on('cambiar-nombre-banda', ({ id, nuevoNombre }) => {
    listaBandas.changeName(id, nuevoNombre);
    io.emit('current-bands', listaBandas.getBandas());
  });

  // Crear una nueva banda
  socket.on('crear-banda', ({ nombre }) => {
    listaBandas.addBanda(nombre);
    io.emit('current-bands', listaBandas.getBandas());
  });
});

httpServer.listen(process.env.PORT, () => {
  console.log('Servidor en ejecución en puerto ' + process.env.PORT);
});