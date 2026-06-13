import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorInicioBordaEmBloco extends Modificador {
    static nomeFolEs: string[] = ["cor-inicio-borda-em-bloco", "cor-início-borda-em-bloco"];
    static nomeCss: string = "border-block-start-color";
    static descricao: string = 'Define a cor da borda do início do bloco de um elemento.';
    static documentacao: string = '# `cor-inicio-borda-em-bloco`\nEsta propriedade mapeia o valor atribuído para uma cor de borda física, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'p {\n  cor-inicio-borda-em-bloco: azul;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            CorInicioBordaEmBloco.nomeFolEs,
            CorInicioBordaEmBloco.nomeCss,
            pragmas,
        );

        if (!variavel) validarValorCor(CorInicioBordaEmBloco.nomeFolEs[1], valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
