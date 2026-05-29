import { Valor } from "../valores";
import { angulos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RotacaoDeslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        inverter: "revert",
    };

    static nomeCss: string = "offset-rotat";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["rotacao-deslocamento", "rotação-deslocamento"],
            RotacaoDeslocamento.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "rotação-deslocamento",
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
