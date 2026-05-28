import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class Fundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fixo: "fixed",
        local: "local",
        rolar: "scroll",
        "borda-caixa": "border-box",
        preenchimento: "padding-box",
        conteudo: "content-box",
        conteúdo: "content-box",
        texto: "text",
        superior: "top",
        inferior: "bottom",
        esquerda: "left",
        direita: "right",
        centro: "center",
        "repetir-horizontal": "repeat-x",
        "repetir-vertical": "repeat-y",
        repetir: "repeat",
        espacar: "space",
        espaçar: "space",
        completar: "round",
        "nao-repetir": "no-repeat",
        "não-repetir": "no-repeat",
        alargar: "contain",
        diminuir: "cover",
        auto: "auto",
    };

    static nomeCss: string = "background";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("fundo", Fundo.nomeCss, pragmas);

        const valoresExtra: Array<string> = [
            'conic-gradient',
            'element',
            'image',
            'paint',
            'radial-gradient',
            'repeating-conic-gradient',
            'repeating-linear-gradient', 
            'repeating-radial-gradient',
        ];

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    "fundo",
                    valores,
                    this.valoresAceitos,
                    valoresExtra
                );
            } else {
                validarMultiplosQualitativos(
                    "fundo",
                    valores,
                    this.valoresAceitos,
                    unidadesMedida,
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
