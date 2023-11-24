import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RaioEsquerdoBordaInferior extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("raio-esquerdo-borda-inferior", "border-bottom-left-radius", pragmas);

        validarValorNumerico('raio-esquerdo-borda-inferior', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('raio-esquerdo-borda-inferior', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
