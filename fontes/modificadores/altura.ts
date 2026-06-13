import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Altura extends Modificador {
    static nomeFolEs: string = "altura";
    static nomeCss: string = "height";
    static descricao: string = 'Especifica a altura de um elemento da aplicação.';
    static documentacao: string = '# `altura`\nPor padrão, esta propriedade define a altura da área de conteúdo. No entanto, se a propriedade `tamanho-caixa` for definida com o valor borda-caixa, ele determinará a altura da área da borda.';
    static exemploCodigo: string = 'titulo2 {\n  altura: 120px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Altura.nomeFolEs, Altura.nomeCss, pragmas);

        const valoresExtra = ["fit-content", "clamp"];

        if (!variavel) {
            validarValorNumerico(
                Altura.nomeFolEs,
                valores,
                this.valoresAceitos,
                valoresExtra,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
