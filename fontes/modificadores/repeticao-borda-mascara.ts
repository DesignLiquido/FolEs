import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RepeticaoBordaMascara extends Modificador {
    static nomeFolEs: string[] = ["repeticao-borda-mascara", "repetição-borda-máscara"];
    static nomeCss: string = "mask-border-repeat";
    static descricao: string = 'Especifica o modo de repetição da máscara de uma borda.';
    static documentacao: string = '# `repeticao-borda-mascara`\nPropriedade que define como as regiões de borda de uma imagem de origem são ajustadas para caber nas dimensões da borda da máscara de um elemento.';
    static exemploCodigo: string = 'imagem {\n  repeticao-borda-mascara: arredondar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        esticar: "stretch",
        repetir: "repeat",
        arredondar: "round",
        espacar: "space",
        espaçar: "space",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            RepeticaoBordaMascara.nomeFolEs,
            RepeticaoBordaMascara.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                RepeticaoBordaMascara.nomeFolEs[1],
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
