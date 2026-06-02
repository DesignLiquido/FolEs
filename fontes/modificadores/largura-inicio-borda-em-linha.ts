import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraInicioBordaEmLinha extends Modificador {
    static nomeFolEs: string[] = ["largura-inicio-borda-em-linha", "largura-início-borda-em-linha"];
    static nomeCss: string = "border-inline-start-width";
    static descricao: string = 'Define a largura do início de uma borda em linha de um elemento.';
    static documentacao: string = '# `largura-inicio-borda-em-linha`\nEsta propriedade mapeia o valor recebeido para uma largura de borda física dependendo do modo de escrita do elemento, direcionalidade e orientação do texto.';
    static exemploCodigo: string = 'divisao {\n  largura-inicio-borda-em-linha: grossa;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            LarguraInicioBordaEmLinha.nomeFolEs,
            LarguraInicioBordaEmLinha.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                LarguraInicioBordaEmLinha.nomeFolEs[1],
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
