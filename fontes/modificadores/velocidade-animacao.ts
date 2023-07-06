import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VelocidadeAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "velocidade-normal": "ease",
        "linear": "linear",
        "inicio-lento": "ease-in",
        "início-lento": "ease-in",
        "final-lento": "ease-out",
        "inicio-final-lento": "ease-in-out",
        "início-final-lento": "ease-in-out",
        "passo-inicial": "step-start",
        "passo-final": "step-start",
        "salto-inicial": "jump-start",
        "salto-final": "jump-end",
        "salto-nenhum": "jump-none",
        "salto-conjunto": "jump-both",
        "inicial": "start",
        "final": "end",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["velocidade-animacao", "velocidade-animação"],
            "animation-timing-function"
        );
        
        // Demais valores aceitos
        const valoresExtra = ['cubic-bezier', 'steps'];
        validarValores('velocidade-animação', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
