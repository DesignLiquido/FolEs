import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarPaginaApos extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        sempre: "always",
        evitar: "avoid",
        esquerda: "left",
        direita: "right",
        frente: "recto",
        verso: "verso",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["quebrar-pagina-apos", "quebrar-página-após"],
            "page-break-after",
            pragmas,
        );

        if (!variavel) validarValores("quebrar-página-após", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
