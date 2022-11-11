import { Modificador } from "./superclasse/modificador";

export class MargemSuperiorRolagemMouse extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("margem-superior-rolagem-mouse", "scroll-margin-top");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
