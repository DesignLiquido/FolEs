import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Filtro extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "url": "url",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("filtro", "filter", pragmas);

        const valoresExtra = ['url', 'blur', 'brightness', 'contrast'];
        validarValores('filtro', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
