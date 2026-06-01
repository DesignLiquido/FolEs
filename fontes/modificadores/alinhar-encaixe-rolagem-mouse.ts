import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { Valor } from "../valores";

export class AlinharEncaixeRolagemMouse extends Modificador {
    static nomeFolEs: string = "alinhar-encaixe-rolagem-mouse";
    static nomeCss: string = "scroll-snap-align";
    static descricao: string = 'Especifica a posição de permanência de um bloco no contêiner-pai.';
    static documentacao: string = '# `alinhar-encaixe-rolagem-mouse`\nAo rolar a barra para qualquer posição, a fim de visualizar os demais elementos, o bloco marcado encaixa-se na posição definida pelo valor desta propriedade.';
    static exemploCodigo: string = 'divisao {\n  alinhar-encaixe-rolagem-mouse: centro;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        inicio: "start",
        início: "start",
        fim: "end",
        centro: "center",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(AlinharEncaixeRolagemMouse.nomeFolEs, AlinharEncaixeRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValores(
                AlinharEncaixeRolagemMouse.nomeFolEs,
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
