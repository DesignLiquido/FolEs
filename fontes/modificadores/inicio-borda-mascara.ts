import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class InicioBordaMascara extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["inicio-borda-mascara", "início-borda-máscara"],
            "mask-border-outset", 
            pragmas
        );

        // OBS.: Pode receber de 1 a 4 valores
        // A lógica abaixo cobre somente o recebimento de um único valor
        validarValorNumerico('início-borda-máscara', valor);

        this.valor = valor;

        // Não aceita valores percentuais, somente de comprimento
        if (Number(parseInt(valor))) {
            validarQuantificador('início-borda-máscara', quantificador, comprimentos);

            this.quantificador = quantificador;
        }
    }
}
