import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class DeslocarContorno extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("deslocar-contorno", "outline-offset", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('deslocar-contorno', valor);
            
            if (Number(parseInt(valor))) {
                validarQuantificador('deslocar-contorno', quantificador, comprimentos);
                
                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
