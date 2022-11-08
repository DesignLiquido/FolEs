import { Modificador } from "./superclasse/modificador";

export class Aparencia extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["aparencia", "aparência"], "appearance");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
