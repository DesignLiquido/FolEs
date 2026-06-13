import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RepetirImagemBorda extends Modificador {
    static nomeFolEs: string = "repetir-imagem-borda";
    static nomeCss: string = "border-image-repeat";
    static descricao: string = 'Define a repetição da borda de uma imagem.';
    static documentacao: string = '# `repetir-imagem-borda`\nEsta propriedade especifica como as regiões de borda e a região intermediária de uma imagem são ajustadas para caber nas dimensões da imagem de borda de um elemento.';
    static exemploCodigo: string = 'imagem {\n  repetir-imagem-borda: espaçar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        esticar: "stretch",
        repetir: "repeat",
        completar: "round",
        espacar: "space",
        espaçar: "space",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RepetirImagemBorda.nomeFolEs, RepetirImagemBorda.nomeCss, pragmas);

        if (!variavel) validarValores(RepetirImagemBorda.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
