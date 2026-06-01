import { Valor } from "../valores";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FatiarBordaMascara extends Modificador {
    static nomeFolEs: string[] = ["fatiar-borda-mascara", "fatiar-borda-máscara"];
    static nomeCss: string = "mask-border-slice";
    static descricao: string = 'Divide uma imagem em regiões.';
    static documentacao: string = '# `fatiar-borda-mascara`\A imagem a ser dividida deve ser definida pela propriedade `origem-borda-máscara`. As regiões são usadas para formar os componentes da borda da máscara de um elemento.';
    static exemploCodigo: string = 'imagem {\n  fatiar-borda-mascara: 10% 30%;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        preencher: "fill",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            FatiarBordaMascara.nomeFolEs,
            FatiarBordaMascara.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                FatiarBordaMascara.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                null,
                ListaDeValorPercentual
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
