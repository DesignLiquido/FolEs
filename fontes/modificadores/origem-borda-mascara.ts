import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrigemBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["origem-borda-mascara", "origem-borda-máscara"],
            "mask-border-source", 
            pragmas
        );

        // OBS.: Também aceita receber valores do tipo URL (link externo da imagem). 
        // A lógica abaixo cobre somente o recebimento dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos.
        const valoresExtra = ['url'];    
        validarValores('origem-borda-máscara', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
