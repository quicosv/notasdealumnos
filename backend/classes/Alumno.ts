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
		this.notaMedia = 0;
	}
	public setMedia(): void {
this.notaMedia = (this.notaHistoria+this.notaLengua+this.notaMates)/3;		
	}
}
