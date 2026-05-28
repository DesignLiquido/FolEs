import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DirecaoAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        reverter: "reverse",
        alternar: "alternate",
        "alternar-reverter": "alternate-reverse",
    };

    static nomeCss: string = "animation-direction";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["direcao-animacao", "direção-animação"],
            DirecaoAnimacao.nomeCss,
            pragmas,
        );
        
        if (!variavel) validarValores("direção-animação", valores, this.valoresAceitos);
        
        this.valores = valores;
        this.variavel = variavel;
    }
}
