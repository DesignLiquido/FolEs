import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaInferior extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("cor-borda-inferior", "border-bottom-color");

        validarValorCor('cor-borda-inferior', valor);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
