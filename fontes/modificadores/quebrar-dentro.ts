import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarDentro extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        evitar: "avoid",
        "evitar-pagina": "avoid-page",
        "evitar-página": "avoid-page",
        "evitar-coluna": "avoid-column",
        "evitar-regiao": "avoid-region",
        "evitar-região": "avoid-region",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("quebrar-dentro", "break-inside", pragmas);

        if (!valorVariavel)
            validarValores("quebrar-dentro", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
