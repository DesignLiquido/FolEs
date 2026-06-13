import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoMascara extends Modificador {
    static nomeFolEs: string[] = ["tamanho-mascara", "tamanho-máscara"];
    static nomeCss: string = "mask-size";
    static descricao: string = 'Especifica os tamanhos das imagens de máscara.';
    static documentacao: string = '# `tamanho-mascara`\nO tamanho da imagem pode ser total ou parcialmente limitado para preservar sua proporção.';
    static exemploCodigo: string = 'imagem {\n  tamanho-mascara: cobrir;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        conter: "contain",
        cobrir: "cover",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(TamanhoMascara.nomeFolEs, TamanhoMascara.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                TamanhoMascara.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
