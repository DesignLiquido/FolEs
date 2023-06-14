import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarDentro extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "evitar": "avoid",
        "evitar-pagina": "avoid-page",
        "evitar-página": "avoid-page",
        "evitar-coluna": "avoid-column",
        "evitar-regiao": "avoid-region",
        "evitar-região": "avoid-region",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("quebrar-dentro", "break-inside");

        validarValores('quebrar-dentro', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
