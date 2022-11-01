import { Modificador } from "./superclasse/modificador";

export class ListaEstiloImagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("lista-estilo-imagem", "list-style-image");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
