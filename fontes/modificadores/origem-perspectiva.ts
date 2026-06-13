import { Valor } from "../valores";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class OrigemPerspectiva extends Modificador {
    static nomeFolEs: string = "origem-perspectiva";
    static nomeCss: string = "perspective-origin";
    static descricao: string = 'Determina a posição para a qual o visualizador está olhando.';
    static documentacao: string = '# `origem-perspectiva`\nEsta propriedade é utilizada como ponto de fuga pela propriedade `perspectiva`.';
    static exemploCodigo: string = 'imagem';

    valoresAceitos: { [valorFoles: string]: string } = {
        esquerda: "left",
        centro: "center",
        direita: "right",
        superior: "top",
        inferior: "bottom",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(OrigemPerspectiva.nomeFolEs, OrigemPerspectiva.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                OrigemPerspectiva.nomeFolEs,
                valores,
                this.valoresAceitos,
                null,
                ListaDeValorPercentual
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
