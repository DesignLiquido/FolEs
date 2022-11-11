import { Modificador } from "./superclasse/modificador";

export class QuebrarPaginaAntes extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["quebrar-pagina-antes", "quebrar-página-antes"], 
            "page-break-before"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
