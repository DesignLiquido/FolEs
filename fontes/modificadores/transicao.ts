import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

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
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["transicao", "transição"], "transition", pragmas);

        const valoresExtra = ["linear"];

        if (!valorVariavel) {
            if (typeof valor === 'string' && valor.includes("/")) {
                validarAtribuicaoAbreviada("numérica", "transição", valor, this.valoresAceitos, valoresExtra);
            } else {
                validarValorNumerico("transição", valor, this.valoresAceitos, valoresExtra);
            }

            if (Number(parseInt(valor))) {
                validarQuantificador("transição", quantificador, valoresTemporais);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
