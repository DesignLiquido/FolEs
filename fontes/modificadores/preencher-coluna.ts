import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PreencherColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "equilibrar": "balance",
        "equilibrar-tudo": "balance-all",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("preencher-coluna", "column-fill", pragmas);

        validarValores('preencher-coluna', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
