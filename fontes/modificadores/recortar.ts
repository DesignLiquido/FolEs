import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Recortar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("recortar", "clip", pragmas);

        // OBS.: Também pode receber a função do tipo <shape> - rect(<top>, <right>, <bottom>, <left>)
        // OBS.2: A documentação informa que o uso desse seletor não é mais recomendado
        // dada sua baixa compatibilidade com os navegadores.

        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 

        validarValores('recortar', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;   
    }
}
