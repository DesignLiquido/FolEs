import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarPaginaAntes extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        sempre: "always",
        evitar: "avoid",
        esquerda: "left",
        direita: "right",
        frente: "recto",
        verso: "verso",
    };

    static nomeCss: string = "page-break-before";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["quebrar-pagina-antes", "quebrar-página-antes"],
            QuebrarPaginaAntes.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores("quebrar-página-antes", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
