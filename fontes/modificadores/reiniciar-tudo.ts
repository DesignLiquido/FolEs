import { Valor } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ReiniciarTudo extends Modificador {
    static nomeFolEs: string = "reiniciar-tudo";
    static nomeCss: string = "all";
    static descricao: string = 'Redefine todas as propriedades de um elemento, exceto as que se enquadram no grupo CSS Custom Properties.';
    static documentacao: string = '# `reiniciar-tudo`\nPode definir propriedades para seus valores iniciais ou herdados, ou para os valores especificados em outra camada ou a origem da folha de estilo.';
    static exemploCodigo: string = 'titulo1 {\n  reiniciar-tudo: herdar;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(ReiniciarTudo.nomeFolEs, ReiniciarTudo.nomeCss, pragmas);

        if (!variavel) validarValores(ReiniciarTudo.nomeFolEs, valores, {});

        this.valores = valores;
        this.variavel = variavel;
    }
}
