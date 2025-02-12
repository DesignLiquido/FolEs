import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class SubstituirIdiomaFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("substituir-idioma-fonte", "font-language-override", pragmas);

        const validacaoString = validarValorString(valor);

        if (validacaoString) {
            this.valoresAceitos[valor] = valor;
        }

        validarValores('substituir-idioma-fonte', valor, this.valoresAceitos);
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
