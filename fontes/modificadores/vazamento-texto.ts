import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VazamentoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        recorte: "clip",
        elipse: "ellipsis",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("vazamento-texto", "text-overflow", pragmas);

        // TODO: Aceita valores string
        if (!variavel) validarValores("vazamento-texto", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
