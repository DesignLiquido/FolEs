import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DirecaoAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "reverter": "reverse",
        "alternar": "alternate",
        "alternar-reverter": "alternate-reverse"
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["direcao-animacao", "direção-animação"], 
            "animation-direction", 
            pragmas
        );

        validarValores('direção-animação', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
