import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioRecuoEmLinha extends Modificador {
    static nomeFolEs: string[] = ["inicio-recuo-em-linha", "início-recuo-em-linha"];
    static nomeCss: string = "padding-inline-start";
    static descricao: string = 'Define a estiliziação do início de um recuo em linha.';
    static documentacao: string = '# `inicio-recuo-em-linha`\nEsta propriedade define o preenchimento de início da linha de um elemento, que é mapeado para um preenchimento físico, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  inicio-recuo-em-linha: 10px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            InicioRecuoEmLinha.nomeFolEs,
            InicioRecuoEmLinha.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                InicioRecuoEmLinha.nomeFolEs[1],
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
