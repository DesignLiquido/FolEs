import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioInsercaoEmBloco extends Modificador {
    static nomeFolEs: string[] = ["inicio-insercao-em-bloco", "início-inserção-em-bloco"];
    static nomeCss: string = "inset-block-start";
    static descricao: string = 'Define a estilização do início de uma inserção em bloco.';
    static documentacao: string = '# `inicio-insercao-em-bloco`\nEsta propridade especifica o deslocamento inicial do bloco de um elemento, que é mapeado para uma inserção física dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  inicio-insercao-em-bloco: 2.4em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            InicioInsercaoEmBloco.nomeFolEs,
            InicioInsercaoEmBloco.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                InicioInsercaoEmBloco.nomeFolEs[1],
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
