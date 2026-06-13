import { Valor } from "../valores";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EsticarFonte extends Modificador {
    static nomeFolEs: string = "esticar-fonte";
    static nomeCss: string = "font-stretch";
    static descricao: string = 'Define uma fonte normal, condensada ou expandida.';
    static documentacao: string = '# `esticar-fonte`\nO valor desta propriedade pode ser definido com palavras-chaves listadas na documentação ou com um valor numérico seguido do quantificador percentual.';
    static exemploCodigo: string = 'p {\n  esticar-fonte: extra-expandida;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "ultra-condensada": "ultra-condensed",
        "extra-condensada": "extra-condensed",
        condensada: "condensed",
        "semi-condensada": "semi-condensed",
        normal: "normal",
        "semi-expandida": "semi-expanded",
        expandida: "expanded",
        "extra-expandida": "extra-expanded",
        "ultra-expandida": "ultra-expanded",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EsticarFonte.nomeFolEs, EsticarFonte.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                EsticarFonte.nomeFolEs,
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
