import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DirecaoAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        reverter: "reverse",
        alternar: "alternate",
        "alternar-reverter": "alternate-reverse",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["direcao-animacao", "direção-animação"],
            "animation-direction",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("direção-animação", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
