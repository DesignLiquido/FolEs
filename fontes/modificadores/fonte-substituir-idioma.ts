import { Modificador } from "./superclasse/modificador";

export class FonteSubstituirIdioma extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("fonte-substituir-idioma", "font-language-override");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
