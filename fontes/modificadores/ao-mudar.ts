import { valoresGlobais } from "./atributos/globais";
import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { Valor } from "../valores";

export class AoMudar extends Modificador {
    static nomeFolEs: string = "ao-mudar";
    static nomeCss: string = "will-change";
    static descricao: string = 'Especifica aos navegadores como um elemento deve mudar.';
    static documentacao: string = '# `ao-mudar`\nOs navegadores podem configurar otimizações antes que um elemento seja realmente alterado. Esses tipos de otimizações podem aumentar a capacidade de resposta de uma página.';
    static exemploCodigo: string = 'título3 {\n  ao-mudar: posição-rolagem;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        "posicao-rolagem": "scroll-position",
        "posição-rolagem": "scroll-position",
        "mudar-conteudo": "contents",
        "mudar-conteúdo": "contents",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(AoMudar.nomeFolEs, AoMudar.nomeCss, pragmas);

        if (!variavel) {

            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "comum",
                    AoMudar.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    false,
                    true
                );
            } else {
                validarValores(AoMudar.nomeFolEs, valores, this.valoresAceitos);
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
