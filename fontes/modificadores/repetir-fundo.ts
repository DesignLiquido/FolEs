import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RepetirFundo extends Modificador {
    static nomeFolEs: string = "repetir-fundo";
    static nomeCss: string = "background-repeat";
    static descricao: string = 'Define  como as imagens de fundo são repetidas.';
    static documentacao: string = '# `repetir-fundo`\nUma imagem de fundo pode ser repetida ao longo dos eixos horizontal e vertical, ou não ser repetida.';
    static exemploCodigo: string = 'corpo {\n  repetir-fundo: repetir-horizontal;;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "repetir-horizontal": "repeat-x",
        "repetir-vertical": "repeat-y",
        repetir: "repeat",
        espacar: "space",
        espaçar: "space",
        completar: "round",
        "nao-repetir": "no-repeat",
        "não-repetir": "no-repeat",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RepetirFundo.nomeFolEs, RepetirFundo.nomeCss, pragmas);

        if (!variavel) validarValores(RepetirFundo.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
