import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Perspectiva extends Modificador {
    static nomeFolEs: string = "perspectiva";
    static nomeCss: string = "perspective";
    static descricao: string = 'Usada para dar alguma perspectiva a um elemento posicionado em 3D.';
    static documentacao: string = '# `perspectiva`\nEsta propriedade define a que distância o objeto está do usuário. Portanto, um valor mais baixo resultará em um efeito 3D mais intenso do que um valor mais alto.';
    static exemploCodigo: string = 'imagem {\n  perspectiva: 3.5em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Perspectiva.nomeFolEs, Perspectiva.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                Perspectiva.nomeFolEs,
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
