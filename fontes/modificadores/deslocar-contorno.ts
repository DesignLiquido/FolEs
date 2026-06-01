import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DeslocarContorno extends Modificador {
    static nomeFolEs: string = "deslocar-contorno";
    static nomeCss: string = "outline-offset";
    static descricao: string = 'Define define a quantidade de espaço entre um contorno e a borda de um elemento.';
    static documentacao: string = '# `deslocar-contorno`\nUm contorno é uma linha desenhada em torno de um elemento, fora da borda da borda. O espaço entre um elemento e seu contorno é transparente. Em outras palavras, é igual ao plano de fundo do elemento pai.';
    static exemploCodigo: string = 'p {\n  deslocar-contorno: 3px;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(DeslocarContorno.nomeFolEs, DeslocarContorno.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                DeslocarContorno.nomeFolEs,
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
