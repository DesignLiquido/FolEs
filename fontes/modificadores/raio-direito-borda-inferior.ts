import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RaioDireitoBordaInferior extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("raio-direito-borda-inferior", "border-bottom-right-radius", pragmas);

        // Pode receber também dois valores número-quantificador
        // Ex.: raio-direito-borda-inferior: 20% 20%;
        // A lógica abaixo cobre apenas o recebimento de UM único valor
        
        validarValorNumerico('raio-direito-borda-inferior', valor);

        this.valor = valor;

        if (Number(parseInt(valor))){
            validarQuantificador('raio-direito-borda-inferior', quantificador, unidadesMedida);
    
            this.quantificador = quantificador;
        }
    }
}
