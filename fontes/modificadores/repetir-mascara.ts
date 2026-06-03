import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RepetirMascara extends Modificador {
    static nomeFolEs: string[] = ["repetir-mascara", "repetir-máscara"];
    static nomeCss: string = "mask-repeat";
    static descricao: string = 'Define como as imagens de máscara são repetidas.';
    static documentacao: string = '# `repetir-mascara`\nUma imagem de máscara pode ser repetida ao longo do eixo horizontal, do eixo vertical, de ambos os eixos ou não ser repetida.';
    static exemploCodigo: string = 'imagem {\n  repetir-mascara: completar;\n}';

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
        super(RepetirMascara.nomeFolEs, RepetirMascara.nomeCss, pragmas);

        if (!variavel) validarValores(RepetirMascara.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
