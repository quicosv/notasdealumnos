import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client"
import { IAlumno } from "./interfaces/alumno.interface";
import { AlumnosForm } from "./AlumnosForm";
import { AlumnosLista } from "./AlumnosLista";

const connectSocketServer = () => {
	const socket: Socket = io('http://localhost:3000', {
		transports: ['websocket']
	});
	return socket;
};

export const Notas = () => {
	const [socket] = useState(connectSocketServer());
	const [online, setOnline] = useState<boolean>(false);
	const [alumnos, setAlumnos] = useState<IAlumno[]>([]);
	useEffect(() => {
		socket.on('connect',() => {
			setOnline(true);
		});
		socket.on('disconnect',() => {
			setOnline(false);
		});
		socket.on('todos-los-alumnos', (alumni) => {
			setAlumnos(alumni);
		});
	},[socket]);
	const crearAlumno = (nombre: string, notaMates: number, notaLengua: number, notaHistoria: number) => {
		console.log(notaMates)
		socket.emit('crear-alumno', {nombre,notaMates,notaLengua,notaHistoria});
	};
	return (
		<>
		<main className="container">
<h1>Notas de alumnos</h1>
<div className="row">
	<div className="col-4">
		<AlumnosForm crearAlumno={crearAlumno} />
	</div>
	<div className="col-8"></div>
	<AlumnosLista alumnosDb={alumnos} />
</div>
		</main>
		<footer>
			<div role="status" aria-live="polite">
				{online ? <p className="text-success">Estás conectado.</p> : <p className="text-dangger">No estás conectado.</p>}
			</div>
		</footer>
		</>
	)
}