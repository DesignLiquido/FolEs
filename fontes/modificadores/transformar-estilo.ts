import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TransformarEstilo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "achatar": "flat",
        "espaco-3d": "preserve-3d",
        "espaço-3d": "preserve-3d",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("transformar-estilo", "transform-style", pragmas);
        
        if (!valorVariavel) validarValores('transformar-estilo', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
