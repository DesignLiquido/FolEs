import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class TamanhoMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "conter": "contain",
        "cobrir": "cover",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["tamanho-mascara", "tamanho-máscara"], "mask-size", pragmas);

        // OBS.: Pode receber também 2 ou múltiplos valores
        // Ex.: tamanho-máscara: 6px, auto, cobrir;
        // A lógica abaixo cobre somente o recebimento de um único valor
        // TODO: Adaptar lógica para cobrir todos os casos

        validarValorNumerico('tamanho-máscara', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('tamanho-máscara', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
