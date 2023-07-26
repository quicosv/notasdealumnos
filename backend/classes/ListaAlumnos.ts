import { Alumno } from "./Alumno";

export class ListaAlumnos {
	private alumnos: Alumno[];
	constructor() {
		this.alumnos = [];
	}

	addAlumno(
		nombre: string,
		notaMates: number,
		notaLengua: number,
		notaHistoria: number
	): void {
		if (!this.alumnos.find((x) => x.getNombre() === nombre)) {
			const nuevoAlumno = new Alumno(
				this.alumnos.length + 1,
				nombre,
				notaMates,
				notaLengua,
				notaHistoria
			);
			nuevoAlumno.calcularNotaMedia();
			this.alumnos.push(nuevoAlumno);
		}
	}

	getAlumnos(): Alumno[] {
		return this.alumnos;
	}
		/**
	 * Ordena los alumnos por su nota media. Si se omite el criterio el orden es ascendente.
	 * @param {string} criterio
	 */

	ordenarMedia(criterio: string) {
		switch (criterio) {
			case 'ascendente':
				this.alumnos = this.alumnos.sort((a,b) => a.getNotaMedia()-b.getNotaMedia());
				break;
			case 'descendente':
				this.alumnos = this.alumnos.sort((a,b) => b.getNotaMedia()-a.getNotaMedia());
				break;
			default:
				this.alumnos = this.alumnos.sort((a,b) => a.getNotaMedia()-b.getNotaMedia());
				break;
		}
	}
}
