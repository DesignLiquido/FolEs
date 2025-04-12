import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DeslocarPontuacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        primeiro: "first",
        ultimo: "last",
        último: "last",
        "forcar-fim": "force-end",
        "forçar-fim": "force-end",
        "permitir-fim": "allow-end",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["deslocar-pontuacao", "deslocar-pontuação"],
            "hanging-punctuation",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("deslocar-pontuação", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
