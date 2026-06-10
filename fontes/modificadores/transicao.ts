import { Valor } from "../valores";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Transicao extends Modificador {
    static nomeFolEs: string[] = ["transicao", "transição"];
    static nomeCss: string = "transition";
    static descricao: string = 'Especifica os efeitos de transição de um elemento.';
    static documentacao: string = '# `transicao`\nPropriedade de atribuição abreviada para definir todos os efeitos de transição utilizando uma única propriedade.';
    static exemploCodigo: string = 'imagem {\n  transicao: final-lento;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "velocidade-normal": "ease",
        "inicio-lento": "ease-in",
        "início-lento": "ease-in",
        "final-lento": "ease-out",
        "inicio-final-lento": "ease-in-out",
        "início-final-lento": "ease-in-out",
        linear: "linear",
        "passo-inicial": "step-start",
        "passo-final": "step-end",
        nenhuma: "none",
        todas: "all",
        // Nomes de propriedades FolEs que podem ser usados no shorthand de transição
        opacidade: "opacity",
        cor: "color",
        fundo: "background",
        largura: "width",
        altura: "height",
        transformar: "transform",
        margem: "margin",
        recuo: "padding",
        borda: "border",
        "tamanho-fonte": "font-size",
        "raio-borda": "border-radius",
        "sombra-caixa": "box-shadow",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Transicao.nomeFolEs, "transition", pragmas);

        const valoresExtra = ["linear"];

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    Transicao.nomeFolEs[1],
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    valoresTemporais,
                    false,
                    true
                );
            } else {
                validarValorNumerico(
                    Transicao.nomeFolEs[1],
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    valoresTemporais
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
