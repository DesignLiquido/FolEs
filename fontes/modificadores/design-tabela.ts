import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DesignTabela extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "fixo": "fixed",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("design-tabela", "table-layout", pragmas);
        
        validarValores('design-tabela', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
