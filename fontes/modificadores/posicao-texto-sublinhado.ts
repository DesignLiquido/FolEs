import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PosicaoTextoSublinhado extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        direita: "right",
        esquerda: "left",
        debaixo: "under",
        "de-frente": "from-front",
    };

    static nomeCss: string = "text-underline-position";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["posicao-texto-sublinhado", "posição-texto-sublinhado"],
            PosicaoTextoSublinhado.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                "posição-texto-sublinhado",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
