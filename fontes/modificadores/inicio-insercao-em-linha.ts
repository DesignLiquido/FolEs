import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioInsercaoEmLinha extends Modificador {
    static nomeFolEs: string[] = ["inicio-insercao-em-linha", "início-inserção-em-linha"];
    static nomeCss: string = "inset-inline-start";
    static descricao: string = 'Define a estilização do início de uma inserção em linha.';
    static documentacao: string = '# `inicio-insercao-em-linha`\nEsta propridade especifica o deslocamento inicial da linha de um elemento, que é mapeado para uma inserção física dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  inicio-insercao-em-linha: 2.4em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            InicioInsercaoEmLinha.nomeFolEs,
            InicioInsercaoEmLinha.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                InicioInsercaoEmLinha.nomeFolEs[1],
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
