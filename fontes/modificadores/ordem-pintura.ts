import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrdemPintura extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "tracado": "stroke",
        "traçado": "stroke",
        "preencher": "fill",
        "marcadores": "markers",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("ordem-pintura", "paint-order", pragmas);

        validarValores('ordem-pintura', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
