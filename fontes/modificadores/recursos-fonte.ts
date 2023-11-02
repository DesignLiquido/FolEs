import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RecursosFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("recursos-fonte", "font-feature-settings", pragmas);

        // OBS.: Também aceita receber o valor do tipo <feature-tag-value>
        // TODO: Adaptar lógica para cobrir todos os casos de valores
        validarValores('recursos-fonte', valor, this.valoresAceitos);
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
