import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioMargemEmLinha extends Modificador {
    static nomeFolEs: string[] = ["inicio-margem-em-linha", "início-margem-em-linha"];
    static nomeCss: string = "margin-inline-start";
    static descricao: string = 'Define a estilização do início de uma margem em linha.';
    static documentacao: string = '# `inicio-margem-em-linha`\nEsta propriedade define a margem inicial de um elemento em linha, que é mapeada para uma margem física, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'divisao {\n  inicio-margem-em-linha: 10px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            InicioMargemEmLinha.nomeFolEs,
            InicioMargemEmLinha.nomeCss,
            pragmas,
        );
        
        if (!variavel) {
            validarValorNumerico(
                InicioMargemEmLinha.nomeFolEs[1],
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
