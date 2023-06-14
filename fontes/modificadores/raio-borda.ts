import { comprimentos, ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RaioBorda extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("raio-borda", "border-radius");

        // OBS.: raio-borda também aceita uma sintaxe específica com uma barra (/) entre os valores
        // EX.: raio-borda: 10px / 20px;
        // TODO: Implementar lógica necessária para aceitar esse caso. 

        validarValorNumerico('raio-borda', valor);

        this.valor = valor;

        if (quantificador !== undefined) {
            if (!(quantificador in comprimentos) && !(quantificador in ListaDeValorPercentual)) {
                throw new Error(`Propriedade 'raio-borda' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeValorPercentual).reduce((final, atual) => final += `, ${atual}`)}.
                ${Object.keys(comprimentos).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
