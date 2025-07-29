import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class AlinharUltimoItem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        justificar: "justify",
        auto: "auto",
        inicio: "start",
        início: "start",
        fim: "end",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["alinhar-ultimo-item", "alinhar-último-item"],
            "text-align-last",
            pragmas,
        );

        // O modificador não aceita os valores posicionais 'superior' e 'inferior'
        const posicoesAceitas = Object.keys(posicoesBasicas).filter(
            (posicao) => posicao !== "superior" && posicao !== "inferior",
        );

        // Transforma array em objeto para processo de validação
        const posicoesValidas = {};
        posicoesAceitas.forEach((posicao, index) => {
            posicoesValidas[posicao] = posicoesAceitas[index];
        });

        validarValoresAdicionais(
            "alinhar-último-item",
            valores,
            posicoesValidas,
            this.valoresAceitos,
        );

        this.valores = valores;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
