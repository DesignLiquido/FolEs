import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EspacoBorda extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["espaco-borda", "espaço-borda"], "border-spacing");

        // Pode receber também mais de um valor número-quantificador
        // Ex.: espaco-borda: 1cm 2em;

        // A lógica abaixo cobre apenas o recebimento de UM único valor
        // TODO: Adaptar lógica para cobrir todos os casos.

        validarValorNumerico('espaço-borda', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('espaço', quantificador, comprimentos);

            this.quantificador = quantificador;
        }
    }
}
