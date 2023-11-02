import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class PosicaoInferior extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["posicao-inferior", "posição-inferior"], "bottom", pragmas);

        validarValorNumerico('posição-inferior', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('posição-inferior', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
