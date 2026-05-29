import { Valor } from "../valores";
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

    static nomeCss: string = "break-inside";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("quebrar-dentro", QuebrarDentro.nomeCss, pragmas);

        if (!variavel) validarValores("quebrar-dentro", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
