import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RaioBorda extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("raio-borda", "border-radius", pragmas);

        // OBS.: raio-borda também aceita uma sintaxe específica com uma barra (/) entre os valores
        // EX.: raio-borda: 10px / 20px;
        // TODO: Implementar lógica necessária para aceitar esse caso. 

        validarValorNumerico('raio-borda', valor);

        this.valor = valor;

        if (quantificador !== undefined) {
            validarQuantificador('raio-borda', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
