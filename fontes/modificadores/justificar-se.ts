import { Valor } from "../valores";
import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class JustificarSe extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        seguro: "safe",
        inseguro: "unsafe",
        legado: "legacy",
        "auto-inicio": "self-start",
        "auto-início": "self-start",
        "auto-fim": "self-end",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("justificar-se", "justify-self", pragmas);

        // Além dos valores listados, aceita também todos os valores da Lista
        // de Posições - exceto 'top' e 'bottom' - 'superior' e 'inferior'
        const posicoesAceitas = Object.keys(posicoes).filter(
            (posicao) => posicao !== "superior" && posicao !== "inferior",
        );

        const posicoesValidas = {};
        posicoesAceitas.forEach((posicao, index) => {
            posicoesValidas[posicao] = posicoesAceitas[index];
        });

        validarValoresAdicionais(
            "justificar-se",
            valores,
            posicoesValidas,
            this.valoresAceitos,
        );

        this.valores = valores;
    }
}
