import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComposicaoMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "adicionar": "add",
        "subtrair": "subtract",
        "cruzar": "intersect",
        "excluir": "exclude",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(
            ["composicao-mascara", "composição-máscara"],
            "mask-composite", 
            pragmas
        );

        if (!valorVariavel) validarValores('composição-máscara',valor, this.valoresAceitos);

        this.valor = valor;
    }
}
