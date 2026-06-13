import { Valor } from "../valores";
import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class JustificarSe extends Modificador {
    static nomeFolEs: string = "justificar-se";
    static nomeCss: string = "justify-self";
    static descricao: string = 'Define como um item deve ser justificado dentro de sua própria área.';
    static documentacao: string = '# `justificar-se`\nEsta propriedade define a maneira como uma caixa é justificada dentro de seu contêiner de alinhamento ao longo do eixo apropriado.';
    static exemploCodigo: string = 'p {\n  justificar-se: centro;\n}';

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
        super(JustificarSe.nomeFolEs, JustificarSe.nomeCss, pragmas);

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
                JustificarSe.nomeFolEs,
                valores,
                posicoesValidas,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
