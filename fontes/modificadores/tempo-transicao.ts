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
            "transition-timing-function"
        );

        // OBS.: Também aceita receber: 
        // 1. A função cubic-bezier(p1, p2, p3, p4);
        // 2. A função steps(n, <jumpterm>);
        // 3. múltiplos valores. 

        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 
        const valoresExtra = ['cubic-bezier', 'steps'];

        validarValores('tempo-transição', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
