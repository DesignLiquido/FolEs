import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VazamentoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "recortar": "clip",
        "elipse": "ellipsis",
    }

    constructor(valor: string, quantificador: string) {
        super("vazamento-texto", "text-overflow");

        // OBS.: Também aceita receber:
        // 1. Valores <string>;
        // 2. A função fade();

        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos.

        validarValores('vazamento-texto', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
