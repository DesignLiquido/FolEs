import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Filtro extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "url": "url",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("filtro", "filter", pragmas);

        // Também pode receber uma lista de funções próprias
        // EXEMPLOS:
        // filter: blur(5px);
        // filter: brightness(0.4);
        // filter: contrast(200%);

        const valoresExtra = ['url', 'contrast'];
        validarValores('filtro', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
