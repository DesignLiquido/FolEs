import { Modificador } from "./superclasse/modificador";

export class QuebrarPaginaAntes extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["quebrar-pagina-antes", "quebrar-página-antes"], 
            "page-break-before"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
