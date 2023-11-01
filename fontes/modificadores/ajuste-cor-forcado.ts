import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";

export class AjusteCorForcado extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["ajuste-cor-forcado", "ajuste-cor-forçado"],
            "forced-color-adjust",
            pragmas
        );

        validarValores("ajuste-cor-forçado", valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
