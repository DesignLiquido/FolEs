import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PropriedadeTransicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
        "todas": "all",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["propriedade-transicao", "propriedade-transição"],
            "transition-property", 
            pragmas
        );

        // OBS.: Também aceita receber valores do tipo <custom-ident>

        // A lógica abaixo cobre somente o recebimento dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 

        validarValores('propriedade-transição', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
