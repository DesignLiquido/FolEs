import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EspacoEmBranco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "nao-quebrar": "nowrap",
        "não-quebrar": "nowrap",
        "preservar": "pre",
        "preservar-quebra": "pre-wrap",
        "preservar-linha": "pre-line",
        "quebrar-espacos": "break-spaces",
        "quebrar-espaços": "break-spaces",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["espaco-em-branco", "espaço-em-branco"], "white-space", pragmas);

        validarValores('espaço-em-branco', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
