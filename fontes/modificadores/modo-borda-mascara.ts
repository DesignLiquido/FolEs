import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModoBordaMascara extends Modificador {
    static nomeFolEs: string[] = ["modo-borda-mascara", "modo-borda-máscara"];
    static nomeCss: string = "mask-border-mode";
    static descricao: string = 'Especifica o modo de mesclagem usado em uma borda de máscara.';
    static documentacao: string = '# `modo-borda-mascara`\nO modo de mesclagem pode ser definido com o valor alfa ou de luminância.';
    static exemploCodigo: string = 'imagem {\n  modo-borda-mascara: luminância;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        luminancia: "luminance",
        luminância: "luminance",
        alfa: "alpha",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ModoBordaMascara.nomeFolEs,
            ModoBordaMascara.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(ModoBordaMascara.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
