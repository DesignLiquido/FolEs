import { Valor } from "../valores";
import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class AlinharSe extends Modificador {
    static nomeFolEs: string = "alinhar-se";
    static nomeCss: string = "align-self";
    static descricao: string = 'Substitui o valor da propriedade alinhar-itens de um elemento com a exibição em grade ou flexível.';
    static documentacao: string = '# `alinhar-se`\nNo tipo em grade, a propriedade alinha o elemento dentro de sua própria área. No tipo flexbox, o elemento é alinhado no Eixo Cruzado.';
    static exemploCodigo: string = 'divisao{\n  alinhar-se: início;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "inicio-linha-base": "first baseline",
        "início-linha-base": "first baseline",
        "fim-linha-base": "last baseline",
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
        super(AlinharSe.nomeFolEs, AlinharSe.nomeCss, pragmas);

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
                AlinharSe.nomeFolEs,
                valores,
                posicoesValidas,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
