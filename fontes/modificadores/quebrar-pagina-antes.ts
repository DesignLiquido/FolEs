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

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["quebrar-pagina-antes", "quebrar-página-antes"],
            "page-break-before",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("quebrar-página-antes", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
