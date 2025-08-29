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

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("combinar-texto-vertical", "text-combine-upright", pragmas);

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
