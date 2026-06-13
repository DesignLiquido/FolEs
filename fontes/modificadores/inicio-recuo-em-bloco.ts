import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioRecuoEmBloco extends Modificador {
    static nomeFolEs: string[] = ["inicio-recuo-em-bloco", "início-recuo-em-bloco"];
    static nomeCss: string = "padding-block-start";
    static descricao: string = 'Define a estiliziação do início de um recuo em bloco.';
    static documentacao: string = '# `inicio-recuo-em-bloco`\nEsta propriedade define o preenchimento de início do bloco de um elemento, que é mapeado para um preenchimento físico, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  inicio-recuo-em-bloco: 10px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            InicioRecuoEmBloco.nomeFolEs,
            InicioRecuoEmBloco.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                InicioRecuoEmBloco.nomeFolEs[1],
                valores,
                null,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
