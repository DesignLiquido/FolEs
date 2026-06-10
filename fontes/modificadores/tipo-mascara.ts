import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TipoMascara extends Modificador {
    static nomeFolEs: string[] = ["tipo-mascara", "tipo-máscara"];
    static nomeCss: string = "mask-type";
    static descricao: string = 'Define se um elemento SVG é usado como uma luminância ou uma máscara alfa.';
    static documentacao: string = '# `tipo-mascara`\nAplica-se ao próprio elemento máscara. Esta propriedade pode ser substituída por modo-máscara, que tem o mesmo efeito, mas se aplica ao elemento onde a máscara é usada. As máscaras alfa geralmente são mais rápidas de renderizar.';
    static exemploCodigo: string = 'divisao {\n  tipo-mascara: luminância;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        alfa: "alpha",
        luminancia: "luminance",
        luminância: "luminance",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(TipoMascara.nomeFolEs, TipoMascara.nomeCss, pragmas);

        if (!variavel) validarValores(TipoMascara.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
