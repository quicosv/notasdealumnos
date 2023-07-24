import { Banda } from "./Banda";

export class BandaLista {
	private bandas: Banda[];
	constructor() {
		this.bandas = [
			new Banda(1, "ColdPlay"),
			new Banda(2, "U2"),
			new Banda(3, "REM"),
		];
	}

	addBanda(nombre: string): void {
		if (!this.bandas.find((x) => x.nombre === nombre)) {
			const nuevaBanda = new Banda(this.bandas.length + 1, nombre);
			this.bandas.push(nuevaBanda);
		}
	}

	removeBanda(id: number): void {
		this.bandas = this.bandas.filter((x) => x.id !== id);
	}

	getBandas(): Banda[] {
		return this.bandas;
	}

	increaseVotes(id: number): void {
		this.bandas.forEach((x) => {
			if (x.id === id) {
				x.votos += 1;
			}
		});
	}

	changeName(id: number, nuevoNombre: string): void {
		this.bandas.forEach((x) => {
			if (x.id === id) {
				x.nombre = nuevoNombre;
			}
		});
	}
}
