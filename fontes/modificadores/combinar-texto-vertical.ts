import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class CombinarTextoVertical extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        tudo: "all",
        digitos: "digits",
        dígitos: "digits",
    };

    static nomeCss: string = "text-combine-upright";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("combinar-texto-vertical", CombinarTextoVertical.nomeCss, pragmas);

        if (!variavel) {
            validarValores(
                "combinar-texto-vertical",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
