import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EsquemaCor extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "claro": "light",
        "escuro": "dark",
        "apenas": "only",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("esquema-cor", "color-scheme", pragmas);
        
        // OBS.: Também pode receber duas palavras dos valores aceitos.
        // Ex.: esquema-cor: apenas claro;

        // A lógica abaixo cobre o recebimento de uma única palavra
        // TODO: Adaptar lógica para cobrir recebimento de duas palavras.
        
        validarValores('esquema-cor', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
