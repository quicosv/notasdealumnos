import { useEffect, useState } from "react";
import { IAlumno } from "./interfaces/alumno.interface";
import { Socket } from "socket.io-client";

interface IAlumnosListaProps {
	alumnosDb: IAlumno[];
	socket: Socket;
}

export const AlumnosLista = ({ alumnosDb, socket }: IAlumnosListaProps) => {
	const [alumnos, setAlumnos] = useState<IAlumno[]>(alumnosDb);
	// const [suma, setSuma] = useState<number>(0);
	useEffect(() => {
		setAlumnos(alumnosDb);
	}, [alumnosDb]);
	return (
		<>
			{alumnos.length === 0 ? (<p>No hay alumnos.</p>) :
				(<table className="table table-stripped">
					<caption>Notas de los alumnos</caption>
					<thead>
						<tr>
							<th scope="col">Nombre</th>
							<th scope="col">Matemáticas</th>
							<th scope="col">Lengua</th>
							<th scope="col">Historia</th>
							<th scope="col"><details>
								<summary>Media</summary>
								<ul className="sinvinietas">
									<li><button onClick={() => socket.emit('ordenar-alumnos', 'ascendente')}>Orden ascendente</button></li>
									<li><button onClick={() => socket.emit('ordenar-alumnos', 'descendente')}>Orden descendente</button></li></ul>
							</details>
							</th>
						</tr>
					</thead>
					<tbody>
						{alumnos.map((x) => (
							<tr key={x.id}>
								<th scope="row" className="table-cell">{x.nombre}</th>
								<td>{x.notaMates}</td>
								<td>{x.notaLengua}</td>
								<td>{x.notaHistoria}</td>
								<td>{x.notaMedia}</td>
							</tr>
							// setSuma(suma+x.media);
						))}

					</tbody>
				</table>)}
		</>
	)
}