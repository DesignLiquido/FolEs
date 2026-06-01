import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorInicioBordaEmLinha extends Modificador {
    static nomeFolEs: string[] = ["cor-inicio-borda-em-linha", "cor-início-borda-em-linha"];
    static nomeCss: string = "border-inline-start-color";
    static descricao: string = 'Define a cor da borda do início da linha de um elemento.';
    static documentacao: string = '# `cor-inicio-borda-em-linha`\nEsta propriedade mapeia o valor atribuído para uma cor de borda física, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'p {\n  cor-inicio-borda-em-linha: azul;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            CorInicioBordaEmLinha.nomeFolEs,
            CorInicioBordaEmLinha.nomeCss,
            pragmas,
        );

        if (!variavel) validarValorCor(CorInicioBordaEmLinha.nomeFolEs[1], valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
