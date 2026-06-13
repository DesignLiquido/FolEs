import { Valor } from "../valores";
import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class JustificarItens extends Modificador {
    static nomeFolEs: string = "justificar-itens";
    static nomeCss: string = "justify-items";
    static descricao: string = 'Define como justificar um item ao longo de um eixo especificado.';
    static documentacao: string = '# `justificar-itens`\nEsta propriedade define o padrão da propriedade `justificar-se` para todos os itens de um bloco, dando a todos uma forma padrão de justificá-los ao longo do eixo especificado.';
    static exemploCodigo: string = 'divisao {\n  justificar-itens: esticar;\n}';

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
        variavel?: boolean
    ) {
        super(JustificarItens.nomeFolEs, JustificarItens.nomeCss, pragmas);

        // Além dos valores listados, aceita também todos os valores da Lista
        // de Posições - exceto 'top' e 'bottom' - 'superior' e 'inferior'
        const posicoesAceitas = Object.keys(posicoes).filter(
            (posicao) => posicao !== "superior" && posicao !== "inferior",
        );

        const posicoesValidas = {};
        posicoesAceitas.forEach((posicao, index) => {
            posicoesValidas[posicao] = posicoesAceitas[index];
        });

        if (!variavel) {
            validarValoresAdicionais(
                JustificarItens.nomeFolEs,
                valores,
                posicoesValidas,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
