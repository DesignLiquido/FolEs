import { Modificador } from "./superclasse/modificador";

export class QuebrarPaginaApos extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["quebrar-pagina-apos", "quebrar-página-após"], 
            "page-break-after"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
