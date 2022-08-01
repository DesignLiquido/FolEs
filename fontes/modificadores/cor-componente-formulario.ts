import { Modificador } from "./modificador";

export class CorComponenteFormulario extends Modificador {
    constructor(valor: string) {
        super("cor-componente-formulario", "accent-color");
        this.valor = valor;
    }
}