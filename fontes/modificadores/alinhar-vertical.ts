import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class AlinharVertical extends Modificador {
    static nomeFolEs: string = "alinhar-vertical";
    static nomeCss: string = "vertical-align";
    static descricao: string = 'Define o alinhamento vertical de um elemento da aplicação.';
    static documentacao: string = '# `alinhar-vertical`\nPropriedade aplicável para elementos com exibição em linha (inline), de bloco em linha (inline-block) ou à célula de uma tabela.';
    static exemploCodigo: string = 'celula {\n  alinhar-vertical: topo-texto;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "linha-base": "baseline",
        "linha-inferior": "sub",
        "linha-superior": "super",
        "topo-texto": "text-top",
        "base-texto": "text-bottom",
        meio: "middle",
        superior: "top",
        inferior: "bottom",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(AlinharVertical.nomeFolEs, AlinharVertical.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "alinhar-vertical",
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
