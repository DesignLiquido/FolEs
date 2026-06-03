import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ReiniciarContador extends Modificador {
    static nomeFolEs: string = "reiniciar-contador";
    static nomeCss: string = "counter-reset";
    static descricao: string = 'Redefine um contador CSS para um determinado valor.';
    static documentacao: string = '# `reiniciar-contador`\nEsta propriedade criará um novo contador ou um contador invertido com o nome fornecido no elemento especificado. Os contadores normais têm um valor inicial padrão de 0. Os contadores invertidos destinam-se a contagem regressiva e têm um valor inicial padrão definido para o número de elementos no nível atual.';
    static exemploCodigo: string = 'divisao {\n  reiniciar-contador: my-counter -3;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(ReiniciarContador.nomeFolEs, ReiniciarContador.nomeCss, pragmas);

        // OBS.: A sintaxe desse modificador espera receber:
        // 1. o NOME do contador (<custom-ident>);
        // 2. um NÚMERO INTEIRO que represente a incrementação do contador.

        // Ex.: reiniciar-contador: meu-contador -4;

        // O modificador também aceita receber a função 'reverter' (reversed);
        // Ex.: reiniciar-contador: reverter(meu-contador) -1;

        // A lógica abaixo cobre somente o recebimento de 'nenhum' (único valor aceito) e dos Globais.
        // TODO: Adaptar lógica de acordo com a sintaxe do modificador.
        if (!variavel) validarValores(ReiniciarContador.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
