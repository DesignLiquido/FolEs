import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class CelulasVazias extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "exibir": "show",
        "ocultar": "hide",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["celulas-vazias", "células-vazias"], "empty-cells", pragmas);

        validarValores("células-vazias", valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
