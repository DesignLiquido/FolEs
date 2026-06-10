import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoFundo extends Modificador {
    static nomeFolEs: string = "tamanho-fundo";
    static nomeCss: string = "background-size";
    static descricao: string = 'Define o tamanho da imagem de fundo do elemento.';
    static documentacao: string = '# `tamanho-fundo`\nA imagem pode ser deixada em seu tamanho natural, esticado ou restrito para caber no espaço disponível.';
    static exemploCodigo: string = 'corpo {\n  tamanho-fundo: alargar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        alargar: "contain",
        diminuir: "cover",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(TamanhoFundo.nomeFolEs, TamanhoFundo.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                TamanhoFundo.nomeFolEs,
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
