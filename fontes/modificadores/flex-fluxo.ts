import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FlexFluxo extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 2 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "linha": "row",
        "inverter-linha": "row-reverse",
        "coluna": "column",
        "inverter-coluna": "column-reverse",
        "nao-agrupar": "nowrap",
        "não-agrupar": "nowrap",
        "agrupar": "wrap",
        "inverter-agrupamento": "wrap-reverse",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("flex-fluxo", "flex-flow", pragmas);

        // A lógica abaixo cobre o caso de recebimento de um único valor
        // TODO: Ajustar lógica para o recebimento de dois valores.
        validarValores('flex-fluxo', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
