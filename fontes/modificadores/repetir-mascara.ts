import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RepetirMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "repetir-horizontal": "repeat-x",
        "repetir-vertical": "repeat-y",
        repetir: "repeat",
        espacar: "space",
        espaçar: "space",
        completar: "round",
        "nao-repetir": "no-repeat",
        "não-repetir": "no-repeat",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["repetir-mascara", "repetir-máscara"], "mask-repeat", pragmas);

        if (!variavel) validarValores("repetir-máscara", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
