import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class FatiarBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "preencher": "fill",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(
            ["fatiar-borda-mascara", "fatiar-borda-máscara"],
            "mask-border-slice",
            pragmas
        );

        if (!valorVariavel) {
            validarValorNumerico('fatiar-borda-máscara', valor, this.valoresAceitos);

            if (quantificador !== undefined) {
                validarQuantificador('fatiar-borda-máscara', quantificador, ListaDeValorPercentual);
                
                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
