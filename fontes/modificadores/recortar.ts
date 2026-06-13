import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Recortar extends Modificador {
    static nomeFolEs: string = "recortar";
    static nomeCss: string = "clip";
    static descricao: string = 'Define a parte visível de um elemento.';
    static documentacao: string = '# `recortar`\n A propriedade se aplica apenas a elementos absolutamente posicionados — ou seja, elementos cuja propriedade `posição` possua o valor `absoluta` ou `fixa`.';
    static exemploCodigo: string = 'divisao {\n  recortar: auto;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Recortar.nomeFolEs, Recortar.nomeCss, pragmas);

        if (!variavel) validarValores(Recortar.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
