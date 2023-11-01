import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class DeslocarContorno extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("deslocar-contorno", "outline-offset", pragmas);

        validarValorNumerico('deslocar-contorno', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('deslocar-contorno', quantificador, comprimentos);

            this.quantificador = quantificador;
        }
    }
}
