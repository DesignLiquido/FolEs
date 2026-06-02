import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModoMascara extends Modificador {
    static nomeFolEs: string[] = ["modo-mascara", "modo-máscara"];
    static nomeCss: string = "mask-mode";
    static descricao: string = 'Define o modo como uma máscara aplicada a um elemento deve ser estilizada.';
    static documentacao: string = '# `modo-mascara`\nEsta propriedade especifica se a referência de máscara definida pela propriedade `imagem-máscara` é tratada como luminância ou máscara alfa.';
    static exemploCodigo: string = 'imagem {\n  modo-mascara: alfa;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        alfa: "alpha",
        luminancia: "luminance",
        luminância: "luminance",
        "fonte-correspondente": "match-source",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(ModoMascara.nomeFolEs, "mask-mode", pragmas);

        if (!variavel) validarValores(ModoMascara.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
