import { Modificador } from "./superclasse/modificador";

export class CorComponenteFormulario extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("cor-componente-formulario", "accent-color");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
