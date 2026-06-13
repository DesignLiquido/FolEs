import { Valor, ValorTexto } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorCor } from "./validacoes/cor";
import { validarValorString } from "./validacoes/string";

export class EnfaseTexto extends Modificador {
    static nomeFolEs: string[] = ["enfase-texto", "ênfase-texto"];
    static nomeCss: string = "text-emphasis";
    static descricao: string = 'Aplica marcas de ênfase em elementos de texto.';
    static documentacao: string = '# `enfase-texto`\nPropriedade de atribuição abreviada para aplicar ênfases nos textos da aplicação, tais como estilo e cor. Aplicável para todos elementos de texto, exceto espaços e caracteres de controle.';
    static exemploCodigo: string = 'título3 {\n  enfase-texto: preenchido sésamo #555;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        preenchido: "filled",
        abrir: "open",
        ponto: "dot",
        circulo: "circle",
        círculo: "circle",
        "circulo-duplo": "double-circle",
        "círculo-duplo": "double-circle",
        triangulo: "triangle",
        triângulo: "triangle",
        sesamo: "sesame",
        sésamo: "sesame",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EnfaseTexto.nomeFolEs, EnfaseTexto.nomeCss, pragmas);

        let validarString: boolean = false;
        valores.forEach((valor) => {
            if (valor instanceof ValorTexto) {
                validarString = validarValorString(valor);
            }
        });

        if (!variavel && !validarString) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "cor",
                    EnfaseTexto.nomeFolEs[1],
                    valores,
                    this.valoresAceitos
                );
            } else {
                validarValorCor(
                    EnfaseTexto.nomeFolEs[1],
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
