import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecortarMargemVazada extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteúdo-caixa": "content-box",
        "conteudo-caixa": "content-box",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("recortar-margem-vazada", "overflow-clip-margin", pragmas);

        // Também pode aceitar dois valores
        // Ex.: recortar-margem-vazada: conteúdo-caixa 5px;

        // TODO: Implementar lógica para cobrir todos os casos.

        validarValorNumerico('recortar-margem-vazada', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('recortar-margem-vazada', quantificador, comprimentos);

            this.quantificador = quantificador;
        }
    }
}
