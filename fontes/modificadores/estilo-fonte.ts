import { Valor } from "../valores";
import { angulos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class EstiloFonte extends Modificador {
    static nomeFolEs: string = "estilo-fonte";
    static nomeCss: string = "font-style";
    static descricao: string = 'Define se uma fonte deve ser estilizada de forma normal, itálica ou oblíqua.';
    static documentacao: string = '# `estilo-fonte`\nFontes itálicas são geralmente de natureza cursiva, usando menos espaço horizontal do que suas contrapartes sem estilo, enquanto as faces oblíquas são geralmente apenas versões inclinadas da face regular.';
    static exemploCodigo: string = 'p {\n  estilo-fonte: itálica;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        italica: "italic",
        itálica: "italic",
        obliqua: "oblique",
        oblíqua: "oblique",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EstiloFonte.nomeFolEs, EstiloFonte.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    EstiloFonte.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    angulos
                );
            } else {
                validarValores(
                    EstiloFonte.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
