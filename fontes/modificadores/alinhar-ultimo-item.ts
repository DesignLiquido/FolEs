import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class AlinharUltimoItem extends Modificador {
    static nomeFolEs: string[] = ["alinhar-ultimo-item", "alinhar-último-item"];
    static nomeCss: string = "text-align-last";
    static descricao: string = 'Define o alinhamento da última linha de um bloco ou linha.';
    static documentacao: string = '# `alinhar-ultimo-item`\nEsta propriedade só terá efeito se for aplicado logo antes de uma quebra de linha forçada.';
    static exemploCodigo: string = 'titulo1 {\n  alinhar-ultimo-item: esquerda;\n}';

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
        variavel?: boolean
    ) {
        super(
            AlinharUltimoItem.nomeFolEs,
            AlinharUltimoItem.nomeCss,
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

        if (!variavel) {
            validarValoresAdicionais(
                AlinharUltimoItem.nomeFolEs[1],
                valores,
                posicoesValidas,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
