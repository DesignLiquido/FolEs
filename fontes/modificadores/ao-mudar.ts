import { valoresGlobais } from "./atributos/globais";
import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";

export class AoMudar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "posicao-rolagem": "scroll-position",
        "posição-rolagem": "scroll-position",
        "mudar-conteudo": "contents",
        "mudar-conteúdo": "contents",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("ao-mudar", "will-change", pragmas);

        validarValores("ao-mudar", valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
