import { Modificador } from "./superclasse/modificador";

export class FatiarBordaMascara extends Modificador {
     constructor(valor: string, quantificador: string) {
        super(
            ["fatiar-borda-mascara", "fatiar-borda-máscara"], 
            "mask-border-slice"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
