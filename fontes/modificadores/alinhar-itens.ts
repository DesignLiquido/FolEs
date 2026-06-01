import { Valor } from "../valores";
import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class AlinharItens extends Modificador {
    static nomeFolEs: string = "alinhar-itens";
    static nomeCss: string = "align-items";
    static descricao: string = 'Define o valor da propriedade alinhar-se em todos os elementos filhos.';
    static documentacao: string = '# `alinhar-itens`\nNo flexbox, esta propriedade controla o alinhamento dos itens no Eixo Cruzado. No layout de grade, controla o alinhamento dos itens no Eixo do Bloco, dentro de sua própria área.`';
    static exemploCodigo: string = 'divisao {\n  alinhar-itens: esticar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "inicio-linha-base": "first baseline",
        "início-linha-base": "first baseline",
        "fim-linha-base": "last baseline",
        "linha-base": "baseline",
        "auto-inicio": "self-start",
        "auto-início": "self-start",
        "auto-fim": "self-end",
        seguro: "safe",
        inseguro: "unsafe",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(AlinharItens.nomeFolEs, AlinharItens.nomeCss, pragmas);

        // O modificador não aceita os valores posicionais 'esquerda' e 'direita'
        const posicoesAceitas = Object.keys(posicoes).filter(
            (posicao) => posicao !== "esquerda" && posicao !== "direita",
        );

        // Transforma array em objeto para processo de validação
        const posicoesValidas = {};
        posicoesAceitas.forEach((posicao, index) => {
            posicoesValidas[posicao] = posicoesAceitas[index];
        });

        if (!variavel) {
            validarValoresAdicionais(
                AlinharItens.nomeFolEs,
                valores,
                posicoesValidas,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
