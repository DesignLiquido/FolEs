import { Modificador } from "./superclasse/modificador";

export class SelecaoUsuario extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(["selecao-usuario", "seleção-usuário"], "user-select");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
