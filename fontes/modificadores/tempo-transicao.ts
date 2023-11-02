import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TempoTransicao extends Modificador {
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
        "salto-inicial": "jump-start",
        "salto-final": "jump-end",
        "salto-nenhum": "jump-none",
        "salto-conjunto": "jump-both",
        "inicial": "start",
        "final": "end",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["tempo-transicao", "tempo-transição"],
            "transition-timing-function", 
            pragmas
        );

        const valoresExtra = ['cubic-bezier', 'steps'];

        validarValores('tempo-transição', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
