import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarAntes extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "evitar": "avoid",
        "sempre": "always",
        "tudo": "all",
        "evitar-pagina": "avoid-page",
        "evitar-página": "avoid-page",
        "pagina": "page",
        "página": "page",
        "esquerda": "left",
        "direita": "right",
        "frente": "recto",
        "verso": "verso",
        "evitar-coluna": "avoid-column",
        "coluna": "column",
        "evitar-regiao": "avoid-region",
        "evitar-região": "avoid-region",
        "regiao": "region",
        "região": "region",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("quebrar-antes", "break-before");

        validarValores('quebrar-antes', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
