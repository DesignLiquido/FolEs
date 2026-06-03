import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Posicao extends Modificador {
    static nomeFolEs: string[] = ["posicao", "posição"];
    static nomeCss: string = "position";
    static descricao: string = 'Define como um elemento é posicionado em um documento.';
    static documentacao: string = '# `posicao`\nAs propriedades `posição-superior`, `posição-inferior`, `posição-direita` e `posição-esquerda` determinam a localização final dos elementos posicionados.';
    static exemploCodigo: string = 'divisao {\n  posicao: fixa;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        dentro: "static",
        relativa: "relative",
        absoluta: "absolute",
        fixa: "fixed",
        colada: "sticky",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Posicao.nomeFolEs, Posicao.nomeCss, pragmas);

        if (!variavel) validarValores(Posicao.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
