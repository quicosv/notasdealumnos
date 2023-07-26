export class Alumno {
	private id: number;
	private nombre: string;
	private notaMates: number;
	private notaLengua: number;
	private notaHistoria: number;
	private notaMedia: number;

	constructor(
		id: number,
		nombre: string,
		notaMates: number,
		notaLengua: number,
		notaHistoria: number
	) {
		this.id = id;
		this.nombre = nombre;
		this.notaMates = notaMates;
		this.notaLengua = notaLengua;
		this.notaHistoria = notaHistoria;
		this.notaMedia = 0;
	}

	/**
	 * Getter $nombre
	 * @return {string}
	 */
	public getNombre(): string {
		return this.nombre;
	}

	/**
	 * Setter $nombre
	 * @param {string} value
	 */
	public setNombre(value: string) {
		this.nombre = value;
	}

	/**
	 * Getter $notaMates
	 * @return {number}
	 */
	public getNotaMates(): number {
		return this.notaMates;
	}

	/**
	 * Setter $notaMates
	 * @param {number} value
	 */
	public setNotaMates(value: number) {
		this.notaMates = value;
	}

	/**
	 * Getter $notaLengua
	 * @return {number}
	 */
	public getNotaLengua(): number {
		return this.notaLengua;
	}

	/**
	 * Setter $notaLengua
	 * @param {number} value
	 */
	public setNotaLengua(value: number) {
		this.notaLengua = value;
	}

	/**
	 * Getter $notaHistoria
	 * @return {number}
	 */
	public getNotaHistoria(): number {
		return this.notaHistoria;
	}

	/**
	 * Setter $notaHistoria
	 * @param {number} value
	 */
	public setNotaHistoria(value: number) {
		this.notaHistoria = value;
	}

	private calcularMedia(): number {
		const media =
			(this.getNotaMates() + this.getNotaLengua() + this.getNotaHistoria())/3;
		return media;
	}
	/**
	 * Getter $notaMedia
	 * @return {number}
	 */
	public calcularNotaMedia() {
		this.notaMedia = this.calcularMedia();
	}
	public getNotaMedia(): number {
		return this.notaMedia;
	}
}
