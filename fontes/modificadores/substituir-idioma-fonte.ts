import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class SubstituirIdiomaFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("substituir-idioma-fonte", "font-language-override");

        // OBS.: Também aceita receber valores do tipo <string> que representem o idioma
        // Ex.: substituir-idioma-fonte: "ENG";

        // TODO: Adaptar lógica para cobrir todos os casos

        validarValores('substituir-idioma-fonte', valor, this.valoresAceitos);
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
