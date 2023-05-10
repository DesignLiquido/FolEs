import { valoresGlobais } from "./atributos/globais";
import { validarValores } from "./comum";
import { Modificador } from "./superclasse/modificador";

export class AgruparVazamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "quebrar-palavras": "break-word",
        "qualquer-lugar": "anywhere",
    }

    constructor(valor: string, quantificador?: string) {
        super("agrupar-vazamento", "overflow-wrap");

        validarValores("agrupar-vazamento", valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
