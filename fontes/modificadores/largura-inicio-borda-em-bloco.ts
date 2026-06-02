import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraInicioBordaEmBloco extends Modificador {
    static nomeFolEs: string[] = ["largura-inicio-borda-em-bloco", "largura-início-borda-em-bloco"];
    static nomeCss: string = "border-block-start-width";
    static descricao: string = 'Define a largura do início de uma borda em bloco de um elemento.';
    static documentacao: string = '# `largura-inicio-borda-em-bloco`\nEsta propriedade mapeia o valor recebeido para uma largura de borda física dependendo do modo de escrita do elemento, direcionalidade e orientação do texto.';
    static exemploCodigo: string = 'divisao {\n  largura-inicio-borda-em-bloco: grossa;\n}';

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
            LarguraInicioBordaEmBloco.nomeFolEs,
            LarguraInicioBordaEmBloco.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                LarguraInicioBordaEmBloco.nomeFolEs[1],
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
