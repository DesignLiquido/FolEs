import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Escala extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("escala", "scale", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('escala', valor, this.valoresAceitos);
            
            if (Number(parseInt(valor))) {
                validarQuantificador('escala', quantificador, unidadesMedida);
                
                this.quantificador = quantificador;
            }
        }
        
        this.valor = valor;
    }
}
