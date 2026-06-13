import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorDestaque extends Modificador {
    static nomeFolEs: string = "cor-destaque";
    static nomeCss: string = "accent-color";
    static descricao: string = 'Define a cor de destaque para os controles da interface do usuário gerados por alguns elementos.';
    static documentacao: string = '# `cor-destaque`\nA cor destaque de um elemento é geralmente aplicada a elementos do tipo input (campo).';
    static exemploCodigo: string = 'ampo {\n  cor-destaque: hsl(228deg 4% 24% / 0.8);\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CorDestaque.nomeFolEs, CorDestaque.nomeCss, pragmas);

        if (!variavel) validarValorCor(CorDestaque.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
