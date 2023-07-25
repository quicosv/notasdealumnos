import { Alumno } from "./Alumno";

export class ListaAlumnos {
	private alumnos: Alumno[];
	constructor() {
		this.alumnos = [];
	}

	addAlumno(nombre: string, notaMates: number, notaLengua: number, notaHistoria: number): void {
		if (!this.alumnos.find((x) => x.nombre === nombre)) {
			const nuevoAlumno = new Alumno(this.alumnos.length + 1, nombre, notaMates, notaLengua, notaHistoria);
			nuevoAlumno.setMedia();
			this.alumnos.push(nuevoAlumno);
		}
	}

	getAlumnos(): Alumno[] {
		return this.alumnos;
	}
}
