import { Valor } from "../valores";
import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Transicao extends Modificador {
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
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["transicao", "transição"], "transition", pragmas);

        const valoresExtra = ["linear"];

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica", 
                "transição", 
                valores, 
                this.valoresAceitos, 
                valoresExtra,
                valoresTemporais
            );
        } else {
            validarValorNumerico(
                "transição", 
                valores, 
                this.valoresAceitos, 
                valoresExtra,
                valoresTemporais
            );
        }

        this.valores = valores;
    }
}
