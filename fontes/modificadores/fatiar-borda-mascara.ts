import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class FatiarBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "preencher": "fill",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["fatiar-borda-mascara", "fatiar-borda-máscara"],
            "mask-border-slice", 
            pragmas
        );

        // OBS.: Pode receber de 1 a 4 valores
        // A lógica abaixo cobre somente o recebimento de um único valor
        validarValorNumerico('fatiar-borda-máscara', valor, this.valoresAceitos);

        this.valor = valor;

        // Aceita somente o valor percentual (%) como quantificador
        // Também pode receber somente o valor numérico, sem quantificador
        if (quantificador !== undefined) {
            validarQuantificador('fatiar-borda-máscara', quantificador, ListaDeValorPercentual);

            this.quantificador = quantificador;
        }
    }
}
