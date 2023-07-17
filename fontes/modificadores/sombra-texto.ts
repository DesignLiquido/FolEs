import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class SombraTexto extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("sombra-texto", "text-shadow");

        // OBS.: Também aceita receber múltiplos valores, sendo um dos parâmetros do tipo COR
        // Ex.: text-shadow: 1px 1px 2px black;
        validarValorNumerico('sombra-texto', valor);
        this.valor = valor;

        if(quantificador !== undefined) {
            validarQuantificador('sombra-texto', quantificador, unidadesMedida);
            this.quantificador = quantificador;
        }
    }
}
