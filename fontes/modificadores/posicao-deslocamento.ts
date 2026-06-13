import { Valor, ValorNumerico, ValorQualitativo } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoDeslocamento extends Modificador {
    static nomeFolEs: string[] = ["posicao-deslocamento", "posição-deslocamento"];
    static nomeCss: string = "offset-position";
    static descricao: string = 'Define a posição inicial do deslocamento de um elemento.';
    static documentacao: string = '# `posicao-deslocamento`\nEssa propriedade normalmente é usada em combinação com a propriedade `trajeto-deslocamento` para criar um efeito de movimento. O valor determina onde o elemento é colocado inicialmente para se mover ao longo de um trajeto.';
    static exemploCodigo: string = 'p {\n  posicao-deslocamento: centro;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            PosicaoDeslocamento.nomeFolEs,
            PosicaoDeslocamento.nomeCss,
            pragmas,
        );

        // No caso de múltiplos valores, pode receber tanto as posições básicas quanto número-quantificador
        if (!variavel) {
            if (valores.length > 1) {
                valores.forEach((valor) => {
                    const arrayValores: Valor[] = [];
                    arrayValores.push(valor);

                    if (valor instanceof ValorQualitativo) {
                        validarValoresAdicionais(
                            PosicaoDeslocamento.nomeFolEs[1],
                            arrayValores,
                            posicoesBasicas,
                            this.valoresAceitos,
                        );
                    } else if (valor instanceof ValorNumerico) {
                        const valoresExtra: Array<string> = [];
                        Object.keys(posicoesBasicas).forEach((posicao) => valoresExtra.push(posicao));

                        validarValorNumerico(
                            PosicaoDeslocamento.nomeFolEs[1],
                            arrayValores,
                            this.valoresAceitos,
                            valoresExtra,
                            unidadesMedida
                        )
                    }
                });
            } else {
                validarValoresAdicionais(
                    PosicaoDeslocamento.nomeFolEs[1],
                    valores,
                    posicoesBasicas,
                    this.valoresAceitos,
                );
            }
        }
        this.valores = valores;
        this.variavel = variavel;
    }
}
