export class Alumno {
	id: number;
	nombre: string;
	notaMates: number;
	notaLengua: number;
	notaHistoria: number;
	notaMedia: number;

	constructor(id: number, nombre: string, notaMates: number, notaLengua: number, notaHistoria: number) {
		this.id = id;
		this.nombre = nombre;
		this.notaMates = notaMates;
		this.notaLengua = notaLengua;
		this.notaHistoria = notaHistoria;
		this.notaMedia = (notaMates+notaLengua+notaHistoria)/3;
	}
}
