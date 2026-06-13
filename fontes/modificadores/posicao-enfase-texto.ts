import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PosicaoEnfaseTexto extends Modificador {
    static nomeFolEs: string[] = ["posicao-enfase-texto", "posição-ênfase-texto"];
    static nomeCss: string = "text-emphasis-position";
    static descricao: string = 'Define onde as marcas de ênfase são desenhadas em um texto.';
    static documentacao: string = '# `posicao-enfase-texto`\É importante notar que caso não haja espaço suficiente para marcas de ênfase, como ocorre com o texto rubi, a altura da linha é aumentada.';
    static exemploCodigo: string = 'p {\n  posicao-enfase-texto: sobre direita;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        sobre: "over",
        abaixo: "under",
        direita: "right",
        esquerda: "left",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            PosicaoEnfaseTexto.nomeFolEs,
            PosicaoEnfaseTexto.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(PosicaoEnfaseTexto.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
