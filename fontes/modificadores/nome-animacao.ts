import { NUltimoFilho } from "../pseudoclasses/n-último-filho";
import { Valor, ValorQualitativo } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";
import { validarIdentificacaoPersonalizada } from "./validacoes/identificacao-personalizada";

export class NomeAnimacao extends Modificador {
    static nomeFolEs: string[] = ["nome-animacao", "nome-animação"];
    static nomeCss: string = "animation-name";
    static descricao: string = 'Especifica os nomes de uma ou mais regras que descrevem a animação a ser aplicada a um elemento.';
    static documentacao: string = '# `nome-animacao`\nVárias regras de arroba são especificadas como uma lista de nomes separados por vírgula. Se o nome especificado não corresponder a nenhuma regra, nenhuma propriedade será animada.';
    static exemploCodigo: string = 'imagem {\n  nome-animacao: teste_05;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(NomeAnimacao.nomeFolEs, NomeAnimacao.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "comum",
                    NomeAnimacao.nomeFolEs[1],
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    false,
                    true
                );
            } else {
                const valor = valores[0] as ValorQualitativo;
                const globais: Array<string> = Object.keys(valoresGlobais);
                const aceitos: Array<string> = Object.keys(this.valoresAceitos);
                if (globais.includes(valor.qualitativo) || aceitos.includes(valor.qualitativo)) {
                    validarValores(
                        NomeAnimacao.nomeFolEs[1],
                        valores,
                        this.valoresAceitos,
                        null
                    );
                } else {
                    validarIdentificacaoPersonalizada(
                        "nome-animação",
                        valor,
                        this.valoresAceitos
                    );
                }
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
