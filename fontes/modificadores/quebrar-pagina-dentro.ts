import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarPaginaDentro extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        evitar: "avoid",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["quebrar-pagina-dentro", "quebrar-página-dentro"],
            "page-break-inside",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("quebrar-página-dentro", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
