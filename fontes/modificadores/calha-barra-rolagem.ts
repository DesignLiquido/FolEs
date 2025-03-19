import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class CalhaBarraRolagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "estavel": "stable",
        "estável": "stable",
        "ambas-bordas": "both-edges",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("calha-barra-rolagem", "scrollbar-gutter", pragmas);

        if (!valorVariavel) validarValores("calha-barra-rolagem", valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
