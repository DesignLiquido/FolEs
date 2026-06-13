import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioMargemEmBloco extends Modificador {
    static nomeFolEs: string[] = ["inicio-margem-em-bloco", "início-margem-em-bloco"];
    static nomeCss: string = "margin-block-start";
    static descricao: string = 'Define a estilização do início de uma margem em bloco.';
    static documentacao: string = '# `inicio-margem-em-bloco`\nEsta propriedade define a margem inicial do bloco de um elemento, que é mapeada para uma margem física, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  inicio-margem-em-bloco: 10px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            InicioMargemEmBloco.nomeFolEs,
            InicioMargemEmBloco.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                InicioMargemEmBloco.nomeFolEs[1],
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
