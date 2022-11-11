import { Modificador } from "./superclasse/modificador";

export class StatusAnimacao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["status-animacao", "status-animação"], "animation-play-state");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
