import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FluxoEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "linha": "row",
        "coluna": "column",
        "denso": "dense",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("fluxo-em-grade", "grid-auto-flow", pragmas);

        // OBS.: Também aceita receber múltiplos valores. 
        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 

        validarValores('fluxo-em-grade', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
