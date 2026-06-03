import { Valor } from "../valores";
import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicionarItens extends Modificador {
    static nomeFolEs: string = "posicionar-itens";
    static nomeCss: string = "place-items";
    static descricao: string = 'Define o posicionamento de referidos itens da aplicação.';
    static documentacao: string = '# `posicionar-itens`\nPropriedade de atribuição abreviada que permite alinhar os itens ao longo das direções de bloco e linha de uma só vez (ou seja, as propriedades `alinhar-itens` e `justificar-itens`) em um sistema de layout relevante, como Grid ou Flexbox .';
    static exemploCodigo: string = 'p {\n  posicionar-itens: centro;\n}';
 
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
        legado: "legacy",
        "auto-inicio": "self-start",
        "auto-início": "self-start",
        "auto-fim": "self-end",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(PosicionarItens.nomeFolEs,PosicionarItens.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "condição-extra",
                    PosicionarItens.nomeFolEs,
                    valores,
                    posicoes,
                    this.valoresAceitos
                );
            } else {
                validarValoresAdicionais(
                    PosicionarItens.nomeFolEs,
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
