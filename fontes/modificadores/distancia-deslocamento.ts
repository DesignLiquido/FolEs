import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DistanciaDeslocamento extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["distancia-deslocamento", "distância-deslocamento"],
            "offset-distance"
        );

        validarValorNumerico('distância-deslocamento', valor);

        this.valor = valor;

        // O seletor aceita o número 0.
        // Logo, o código só passa pela validação caso haja um segundo parâmetro ou caso o primeiro seja diferente de 0.
        if (quantificador !== undefined || valor !== '0') {
            if (!(quantificador in unidadesMedida)) {
                throw new Error(
                    `Propriedade 'distância-deslocamento' com quantificador inválido. Valores aceitos:
                    ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
