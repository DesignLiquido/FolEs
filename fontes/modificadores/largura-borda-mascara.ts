import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraBordaMascara extends Modificador {
    static nomeFolEs: string[] = ["largura-borda-mascara", "largura-borda-máscara"];
    static nomeCss: string = "mask-border-width";
    static descricao: string = 'Define a largura da máscara utilizada como borda de um elemento.';
    static documentacao: string = '# `largura-borda-mascara`\nA largura pode ser definida com um valor numérico, acompanhado ou não de quantificador, ou pela palavra-chave `auto`.';
    static exemploCodigo: string = 'divisão {\n  largura-borda-mascara: 3em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            LarguraBordaMascara.nomeFolEs,
            LarguraBordaMascara.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                LarguraBordaMascara.nomeFolEs[1],
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
