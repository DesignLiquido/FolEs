import { Valor } from "../valores";
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
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["deslocar-pontuacao", "deslocar-pontuação"],
            "hanging-punctuation",
            pragmas,
        );
        
        if (!variavel) validarValores("deslocar-pontuação", valores, this.valoresAceitos);
        
        this.valores = valores;
        this.variavel = variavel;
    }
}
