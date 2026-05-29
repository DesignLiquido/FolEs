import { Valor } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ReiniciarTudo extends Modificador {
    static nomeCss: string = "all";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("reiniciar-tudo", ReiniciarTudo.nomeCss, pragmas);

        if (!variavel) validarValores("reiniciar-tudo", valores, {});

        this.valores = valores;
        this.variavel = variavel;
    }
}
