import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraContorno extends Modificador {
    static nomeFolEs: string = "largura-contorno";
    static nomeCss: string = "outline-width";
    static descricao: string = 'Define a espessura do contorno de um elemento.';
    static documentacao: string = '# `largura-contorno`\nA largura do contorno pode ser definida com um valor numérico acompanhado de quantificador ou por uma palavra-chave. Um contorno é uma linha desenhada em torno de um elemento, fora de sua borda.';
    static exemploCodigo: string = 'divisao {\n  largura-contorno: média;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(LarguraContorno.nomeFolEs, LarguraContorno.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                LarguraContorno.nomeFolEs,
                valores,
                this.valoresAceitos,
                null,
                comprimentos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
