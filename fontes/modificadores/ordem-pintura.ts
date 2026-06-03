import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrdemPintura extends Modificador {
    static nomeFolEs: string = "ordem-pintura";
    static nomeCss: string = "paint-order";
    static descricao: string = 'Define a ordem de pintura de um elemento da aplicação.';
    static documentacao: string = '# `ordem-pintura\nPropriedade que permite controlar a ordem na qual o preenchimento e os marcadores de pintura do conteúdo do texto e das formas são desenhados.';
    static exemploCodigo: string = 'p {\n  ordem-pintura: traçado;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        tracado: "stroke",
        traçado: "stroke",
        preencher: "fill",
        marcadores: "markers",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(OrdemPintura.nomeFolEs, OrdemPintura.nomeCss, pragmas);

        if (!variavel) validarValores(OrdemPintura.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
