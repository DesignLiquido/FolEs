import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecortarMargemVazada extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteúdo-caixa": "content-box",
        "conteudo-caixa": "content-box",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("recortar-margem-vazada", "overflow-clip-margin", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('recortar-margem-vazada', valor, this.valoresAceitos);

            if (Number(parseInt(valor))) {
                validarQuantificador('recortar-margem-vazada', quantificador, comprimentos);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
