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
        variavel?: boolean
    ) {
        super(
            ["composicao-mascara", "composição-máscara"],
            "mask-composite",
            pragmas,
        );

        if (!variavel) validarValores("composição-máscara", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
