import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class SombraTexto extends Modificador {
    static nomeFolEs: string = "sombra-texto";
    static nomeCss: string = "text-shadow";
    static descricao: string = 'Adiciona sombras ao texto.';
    static documentacao: string = '# `sombra-texto`\nEsta propriedade aceita uma lista de sombras separadas por vírgulas a serem aplicadas ao texto, independente do valor atribuído à propriedade `decoração-texto`. Cada sombra é descrita por alguma combinação de deslocamentos X (horizontal) e Y (vertical) do elemento, raio de desfoque e cor.';
    static exemploCodigo: string = 'titulo2 {\n  sombra-texto: #fc0 1px 0 10px;;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(SombraTexto.nomeFolEs, SombraTexto.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                SombraTexto.nomeFolEs,
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
