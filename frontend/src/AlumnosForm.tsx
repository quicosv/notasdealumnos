import { FormEvent } from "react";
import { IAlumno } from "./interfaces/alumno.interface";
import { useForm } from "./useForm";

interface IAlumnosFormProps {
	crearAlumno: (nombre: string, notaMates: number, notaLengua: number, notaHistoria: number) => void;
}

export const AlumnosForm = ({ crearAlumno}: IAlumnosFormProps) => {
	const {form, onInputChange } = useForm<IAlumno>({
		nombre: '',
		notaMates: 0,
		notaLengua: 0,
		notaHistoria: 0
	});
const {nombre, notaMates, notaLengua, notaHistoria } = form;
const onSubmit = (e: FormEvent) => {
	e.preventDefault();
	crearAlumno(nombre,notaMates,notaLengua,notaHistoria);
}
	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="nombre">Nombre</label>
			<input type="text" id="nombre" onChange={onInputChange} required />
			<label htmlFor="notaMates">Nota de matemáticas</label>
			<input id="notaMates" type="number" min={0} max={10} step={0.01} onChange={onInputChange} required />
			<label htmlFor="notaLengua">Nota de lengua</label>
			<input id="notaLengua" type="number" min={0} max={10} step={0.01} onChange={onInputChange} required />
			<label htmlFor="notaHistoria">Nota de historia</label>
			<input id="notaHistoria" type="number" min={0} max={10} step={0.01} onChange={onInputChange} required />
			<button type="submit">Añadir alumno</button>
		</form>
	)
}