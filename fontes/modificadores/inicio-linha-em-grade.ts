import { Modificador } from "./superclasse/modificador";

export class InicioLinhaEmGrade extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["inicio-linha-em-grade", "inicio-linha-em-grade"], "grid-row-start");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
