import { Modificador } from "./superclasse/modificador";

export class QuebrarPaginaDentro extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["quebrar-pagina-dentro", "quebrar-página-dentro"], 
            "page-break-inside"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
