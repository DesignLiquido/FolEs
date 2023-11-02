import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RecolherBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "recolher": "collapse",
        "separar": "separate",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("recolher-borda", "border-collapse", pragmas);

        validarValores('recolher-borda', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
