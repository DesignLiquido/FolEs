import { Modificador } from "./superclasse/modificador";

export class ImpressaoAjusteCor extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["impressao-ajuste-cor", "impressão-ajuste-cor"], 
            "print-color-adjust"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
