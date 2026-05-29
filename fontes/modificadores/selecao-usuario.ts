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
        elementar: "element",
    };

    static nomeCss: string = "user-select";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["selecao-usuario", "seleção-usuário"], SelecaoUsuario.nomeCss, pragmas);

        if (!variavel) validarValores("seleção-usuário", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
