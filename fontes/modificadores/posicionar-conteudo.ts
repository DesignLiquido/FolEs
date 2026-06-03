import { Valor } from "../valores";
import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicionarConteudo extends Modificador {
    static nomeFolEs: string[] = ["posicionar-conteudo", "posicionar-conteúdo"];
    static nomeCss: string = "place-content";
    static descricao: string = 'Define a posição de um referido conteúdo.';
    static documentacao: string = '# `posicionar-conteudo`\nPropriedade de atribuição abreviada que permite alinhar o conteúdo ao longo das direções de bloco e linha de uma só vez (ou seja, as propriedades `alinhar-conteúdo` e `justificar-conteúdo`) em um sistema de layout relevante, como Grid ou Flexbox.';
    static exemploCodigo: string = 'p {\n  posicionar-conteudo: centro início;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "inicio-linha-base": "first baseline",
        "início-linha-base": "first baseline",
        "fim-linha-base": "last baseline",
        "espaco-entre": "space-between",
        "espaço-entre": "space-between",
        "espaco-ao-redor": "space-around",
        "espaço-ao-redor": "space-around",
        "espaco-uniforme": "space-evenly",
        "espaço-uniforme": "space-evenly",
        seguro: "safe",
        inseguro: "unsafe",
        "auto-inicio": "self-start",
        "auto-início": "self-start",
        "auto-fim": "self-end",
        "primeira-linha-base": "first baseline",
        "ultima-linha-base": "last baseline",
        "última-linha-base": "last baseline",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            PosicionarConteudo.nomeFolEs,
            PosicionarConteudo.nomeCss,
            pragmas,
        );

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "condição-extra",
                    PosicionarConteudo.nomeFolEs[1],
                    valores,
                    posicoes,
                    this.valoresAceitos
                );
            } else {
                validarValoresAdicionais(
                    PosicionarConteudo.nomeFolEs[1],
                    valores,
                    posicoes,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
