import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Filtro extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "url": "url",
    }

    constructor(valor: string, quantificador: string) {
        super("filtro", "filter");

        // Também pode receber uma lista de funções próprias
        // EXEMPLOS:
        // filter: blur(5px);
        // filter: brightness(0.4);
        // filter: contrast(200%);
        // TODO: Implementar lista de funções como valores aceitos

        const valoresExtra = ['url'];

        validarValores('filtro', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
