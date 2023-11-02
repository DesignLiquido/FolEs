import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarPaginaAntes extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "sempre": "always",
        "evitar": "avoid",
        "esquerda": "left",
        "direita": "right",
        "frente": "recto",
        "verso": "verso",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["quebrar-pagina-antes", "quebrar-página-antes"], 
            "page-break-before", 
            pragmas
        );

        validarValores('quebrar-página-antes', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
