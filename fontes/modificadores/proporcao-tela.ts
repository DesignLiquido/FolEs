import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class ProporcaoTela extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["proporcao-tela", "proporção-tela"], "aspect-ratio", pragmas);

        // OBS.: Também pode receber dois números separados por uma barra
        // Ex.: proporcao-tela: 1 / 1;
        // Essa sintaxe é chamada de <ratio>.

        validarValorNumerico('proporção-tela', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        // this.quantificador = quantificador;
    }
}
