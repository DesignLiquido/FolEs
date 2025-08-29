import { Valor } from "../valores";
import { angulos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Girar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("girar", "rotate", pragmas);

        if (!variavel) {
            validarValorNumerico(
                "girar",
                valores,
                this.valoresAceitos,
                null,
                angulos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
