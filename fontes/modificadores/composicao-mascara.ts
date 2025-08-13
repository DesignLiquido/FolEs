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
    ) {
        super(
            ["composicao-mascara", "composição-máscara"],
            "mask-composite",
            pragmas,
        );

        validarValores("composição-máscara", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
