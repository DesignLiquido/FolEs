import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EstiloListaPosicao extends Modificador {
    static nomeFolEs: string[] = ["estilo-lista-posicao", "estilo-lista-posição"];
    static nomeCss: string = "list-style-position";
    static descricao: string = 'Define a posição do marcador relativo a um item de lista.';
    static documentacao: string = '# `estilo-lista-posicao`\nEsta propriedade também pode ser especificada utilizando a propriedade de atribuição abreviada `estilo-lista`';
    static exemploCodigo: string = 'item-lista {\n  estilo-lista-posicao: fora;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        dentro: "inside",
        fora: "outside",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            EstiloListaPosicao.nomeFolEs,
            EstiloListaPosicao.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(EstiloListaPosicao.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
