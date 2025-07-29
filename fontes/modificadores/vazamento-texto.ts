import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class VazamentoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        recortar: "clip",
        elipse: "ellipsis",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("vazamento-texto", "text-overflow", pragmas);

        // TODO: Repensar
        // const validacaoString = validarValorString(valor);

        // if (validacaoString) {
        //     this.valoresAceitos[valor] = valor;
        // }

        validarValores("vazamento-texto", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
