import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class StatusAnimacao extends Modificador {
    static nomeFolEs: string[] = ["status-animacao", "status-animação"];
    static nomeCss: string = "animation-play-state";
    static descricao: string = 'Define se uma animação está em execução ou pausada.';
    static documentacao: string = '# `status-animacao`\nAo retomar uma animação pausada, a animação irá iniciar de onde parou no momento em que foi pausada ao invés de recomeçar do início da sequência de animação.';
    static exemploCodigo: string = 'divisao {\n  status-animacao: executando;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        executando: "running",
        pausada: "paused",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            StatusAnimacao.nomeFolEs,
            StatusAnimacao.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(StatusAnimacao.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
