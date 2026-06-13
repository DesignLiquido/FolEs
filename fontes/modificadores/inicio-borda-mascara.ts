import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioBordaMascara extends Modificador {
    static nomeFolEs: string[] = ["inicio-borda-mascara", "início-borda-máscara"];
    static nomeCss: string = "mask-border-outset";
    static descricao: string = 'Define a estilização do início da máscara de uma borda.';
    static documentacao: string = '# `inicio-borda-mascara`\nEsta propriedade especifica a distância pela qual a borda da máscara de um elemento é definida fora de seu próprio bloco.';
    static exemploCodigo: string = 'divisao {\n  inicio-borda-mascara: 1rem;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            InicioBordaMascara.nomeFolEs,
            InicioBordaMascara.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                InicioBordaMascara.nomeFolEs[1],
                valores,
                null,
                null,
                comprimentos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
