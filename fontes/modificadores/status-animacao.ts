import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class StatusAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        executando: "running",
        pausada: "paused",
    };

    static nomeCss: string = "animation-play-state";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["status-animacao", "status-animação"],
            StatusAnimacao.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores("status-animação", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
