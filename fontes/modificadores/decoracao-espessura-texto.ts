import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DecoracaoEspessuraTexto extends Modificador {
    static nomeFolEs: string[] = ["decoracao-espessura-texto", "decoração-espessura-texto"];
    static nomeCss: string = "text-decoration-thickness";
    static descricao: string = 'Define a espessura da linha de decoração que é usada no texto de um elemento.';
    static documentacao: string = '# `decoracao-espessura-texto`\nDefine a espessura da linha de decoração que é usada no texto de um elemento.';
    static exemploCodigo: string = 'p {\n  decoracao-espessura-texto: de-frente;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        "de-frente": "from-font",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            DecoracaoEspessuraTexto.nomeFolEs,
            DecoracaoEspessuraTexto.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                DecoracaoEspessuraTexto.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
