import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class FatiarImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "preencher": "fill",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("fatiar-imagem-borda", "border-image-slice", pragmas);

        const valoresExtra = ['url'];

        if (!valorVariavel) {
            validarValorNumerico('fatiar-imagem-borda', valor, this.valoresAceitos, valoresExtra);

            // Aceita somente o valor percentual (%) como quantificador.
            // Também pode receber somente o valor numérico, sem quantificador.
            if (quantificador !== undefined) {
                validarQuantificador('fatiar-imagem-borda', quantificador, ListaDeValorPercentual);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
