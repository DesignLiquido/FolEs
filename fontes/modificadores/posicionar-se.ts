import { Valor } from "../valores";
import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicionarSe extends Modificador {
    static nomeFolEs: string = "posicionar-se";
    static nomeCss: string = "place-self";
    static descricao: string = 'Define a auto posição de um elemento da aplicação.';
    static documentacao: string = '# `posicionar-se`\nPropriedade de atribuição abreviada que permite alinhar um item individual ao longo das direções de bloco e linha de uma só vez (ou seja, as propriedades `alinhar-se` e `justificar-se`) em um sistema de layout relevante, como Grid ou Flexbox.';
    static exemploCodigo: string = 'p {\n  posicionar-se: auto centro;\n}';

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
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(PosicionarSe.nomeFolEs, PosicionarSe.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "condição-extra",
                    PosicionarSe.nomeFolEs,
                    valores,
                    posicoes,
                    this.valoresAceitos
                );
            } else {
                validarValoresAdicionais(
                    PosicionarSe.nomeFolEs,
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
