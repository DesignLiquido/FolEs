import { Valor } from "../valores";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FatiarImagemBorda extends Modificador {
    static nomeFolEs: string = "fatiar-imagem-borda";
    static nomeCss: string = "border-image-slice";
    static descricao: string = 'Divide uma imagem em regiões.';
    static documentacao: string = '# `fatiar-imagem-borda`\nA imagem a ser dividida deve ser definida pela propriedade origem-imagem-borda. As regiões formam os componentes da imagem de borda de um elemento.';
    static exemploCodigo: string = 'imagem {\n  fatiar-imagem-borda: 30 30% 45;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        preencher: "fill",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(FatiarImagemBorda.nomeFolEs, FatiarImagemBorda.nomeCss, pragmas);

        const valoresExtra = ["url"];

        if (!variavel) {
            validarValorNumerico(
                FatiarImagemBorda.nomeFolEs,
                valores,
                this.valoresAceitos,
                valoresExtra,
                ListaDeValorPercentual
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
