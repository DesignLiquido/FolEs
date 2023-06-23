import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class PosicaoSuperior extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["posicao-superior", "posição-superior"], "top");

        validarValorNumerico('posição-superior', valor, this.valoresAceitos);

        this.valor = valor;
    
        if (Number(parseInt(valor))) {
            validarQuantificador('posição-superior', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
