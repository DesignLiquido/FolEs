import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class AlinharTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "justificar": "justify",
        "justificar-tudo": "justify-all",
        "combinar-elemento-pai": "match-parent",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("alinhar-texto", "text-align", pragmas);

        if (!valorVariavel) validarValoresAdicionais('alinhar-texto', valor, posicoesBasicas, this.valoresAceitos);

        this.valor = valor;
    }
}
