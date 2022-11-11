import { Modificador } from "./superclasse/modificador";

export class QuebrarPaginaApos extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["quebrar-pagina-apos", "quebrar-página-após"], 
            "page-break-after"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
