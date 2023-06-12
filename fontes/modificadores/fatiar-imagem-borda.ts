import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FatiarImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "preencher": "fill",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("fatiar-imagem-borda", "border-image-slice");

        // OBS.: Pode receber de 1 a 4 valores.
         // TODO: Implementar lógica restante no futuro, tendo em vista a estrutura do Av.Sintático. 
        // A lógica abaixo cobre somente o recebimento de UM valor numérico.
        validarValorNumerico('fatiar-imagem-borda', valor, this.valoresAceitos);  

        this.valor = valor;

        // Aceita somente o valor percentual (%) como quantificador.
        // Também pode receber somente o valor numérico, sem quantificador.
        if (quantificador !== undefined) {
            if (
                !(quantificador in ListaDeValorPercentual)
            ) {
                throw new Error(
                    `Propriedade 'fatiar-imagem-borda' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeValorPercentual).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
