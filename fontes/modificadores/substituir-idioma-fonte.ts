import { Modificador, PragmasModificador } from "./superclasse";

export class SubstituirIdiomaFonte extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("substituir-idioma-fonte", "font-language-override");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
