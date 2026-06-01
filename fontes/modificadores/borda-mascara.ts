import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class BordaMascara extends Modificador {
    static nomeFolEs: string[] = ["borda-mascara", "borda-máscara"];
    static nomeCss: string = "mask-border";
    static descricao: string = 'Define as estilizações referentes à mascara da borda de um elemento.';
    static documentacao: string = '# `borda-mascara`\nPropriedade de atribuição abreviada que permite criar uma máscara ao longo da borda de um elemento.';
    static exemploCodigo: string = 'botao {\n borda-mascara: url("border-mask.png") 25;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        preencher: "fill",
        auto: "auto",
        esticar: "stretch",
        repetir: "repeat",
        arredondar: "round",
        espacar: "space",
        espaçar: "space",
        luminancia: "luminance",
        luminância: "luminance",
        alfa: "alpha",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(BordaMascara.nomeFolEs, BordaMascara.nomeCss, pragmas);

        const valoresExtra: Array<string> = ["url"];

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    BordaMascara.nomeFolEs[1],
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    unidadesMedida
                )
            } else {
                validarValorNumerico(
                    BordaMascara.nomeFolEs[1],
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    unidadesMedida
                )
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
