import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ReiniciarContador extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    static nomeCss: string = "counter-reset";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("reiniciar-contador", ReiniciarContador.nomeCss, pragmas);

        // OBS.: A sintaxe desse modificador espera receber:
        // 1. o NOME do contador (<custom-ident>);
        // 2. um NÚMERO INTEIRO que represente a incrementação do contador.

        // Ex.: reiniciar-contador: meu-contador -4;

        // O modificador também aceita receber a função 'reverter' (reversed);
        // Ex.: reiniciar-contador: reverter(meu-contador) -1;

        // A lógica abaixo cobre somente o recebimento de 'nenhum' (único valor aceito) e dos Globais.
        // TODO: Adaptar lógica de acordo com a sintaxe do modificador.
        if (!variavel) validarValores("reiniciar-contador", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
