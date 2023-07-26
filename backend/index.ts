import cors from 'cors';
import express, { Express } from 'express';
import { Server, Socket } from 'socket.io';
import http from 'http';
import dotenv from 'dotenv';
import { ListaAlumnos } from './classes/ListaAlumnos';

dotenv.config();

const listaDeAlumnos = new ListaAlumnos();

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
  socket.emit('todos-los-alumnos', listaDeAlumnos.getAlumnos());

  // Crear una nueva banda
  socket.on('crear-alumno', ({ nombre, notaMates, notaLengua, notaHistoria }) => {
    console.log(notaMates, parseFloat(notaMates))
    listaDeAlumnos.addAlumno(nombre, notaMates, notaLengua, notaHistoria);
    io.emit('todos-los-alumnos', listaDeAlumnos.getAlumnos());
  });
});

httpServer.listen(process.env.PORT, () => {
  console.log('Servidor en ejecución en puerto ' + process.env.PORT);
});