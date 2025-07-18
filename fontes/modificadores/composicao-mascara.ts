import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComposicaoMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        adicionar: "add",
        subtrair: "subtract",
        cruzar: "intersect",
        excluir: "exclude",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["composicao-mascara", "composição-máscara"],
            "mask-composite",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("composição-máscara", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
