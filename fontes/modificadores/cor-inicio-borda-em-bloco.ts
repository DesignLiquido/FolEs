import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorInicioBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["cor-inicio-borda-em-bloco", "cor-início-borda-em-bloco"],
            "border-block-start-color"
        );

        validarValorCor('cor-início-borda-em-bloco', valor);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
