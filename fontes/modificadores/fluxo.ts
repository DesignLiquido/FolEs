import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Fluxo extends Modificador {
    static nomeFolEs: string = "fluxo";
    static nomeCss: string = "clear";
    static descricao: string = 'Define se um elemento deve ser movido abaixo dos elementos flutuantes que o precedem.'; 
    static documentacao: string = '# `fluxo`\nEsta propriedade se aplica a elementos flutuantes e não flutuantes.';
    static exemploCodigo: string = 'divisão {\n  fluxo: direita;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        esquerda: "left",
        direita: "right",
        ambos: "both",
        "inicio-em-linha": "inline-start",
        "início-em-linha": "inline-start",
        "fim-em-linha": "inline-end",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Fluxo.nomeFolEs, Fluxo.nomeCss, pragmas);

        if (!variavel) validarValores(Fluxo.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
