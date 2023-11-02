import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FlexAgrupar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nao-agrupar": "nowrap",
        "não-agrupar": "nowrap",
        "agrupar": "wrap",
        "inverter-agrupamento": "wrap-reverse",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("flex-agrupar", "flex-wrap", pragmas);

        validarValores('flex-agrupar', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
