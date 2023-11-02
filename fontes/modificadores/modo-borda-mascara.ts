import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModoBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "luminancia": "luminance",
        "luminância": "luminance",
        "alfa": "alpha",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["modo-borda-mascara", "modo-borda-máscara"],
            "mask-border-mode", 
            pragmas
        );
        
        validarValores('modo-borda-máscara', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
