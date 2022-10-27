import { Modificador } from "./modificador";

export class BlocoDecoracao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["bloco-decoracao", "bloco-decoração"], "box-decoration-break");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}