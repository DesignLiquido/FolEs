import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Transicao extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 4 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "velocidade-normal": "ease",
        "inicio-lento": "ease-in",
        "início-lento": "ease-in",
        "final-lento": "ease-out",
        "inicio-final-lento": "ease-in-out",
        "início-final-lento": "ease-in-out",
        "linear": "linear",
        "passo-inicial": "step-start",
        "passo-final": "step-end",
        "nenhuma": "none",
        "todas": "all",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["transicao", "transição"], "transition", pragmas);

        const valoresExtra = ['linear'];

        validarValorNumerico('transição', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('transição', quantificador, valoresTemporais);

            this.quantificador = quantificador;
        }
    }
}
