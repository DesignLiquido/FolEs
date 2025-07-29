import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class SelecaoUsuario extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        auto: "auto",
        texto: "text",
        tudo: "all",
        conter: "contain",
        elemento: "element",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["selecao-usuario", "seleção-usuário"], "user-select", pragmas);

        validarValores("seleção-usuário", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
