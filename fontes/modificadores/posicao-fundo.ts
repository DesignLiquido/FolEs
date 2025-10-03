import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoFundo extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["posicao-fundo", "posição-fundo"],
            "background-position",
            pragmas,
        );
        
        const quantificadoresAceitos = {
            px: "px",
            "%": "%",
            rem: "rem",
            vmin: "vmin",
            vmax: "vmax",
        };
        
        if (!variavel) {
            validarValorNumerico(
                "posição-fundo",
                valores,
                posicoesBasicas,
                null,
                quantificadoresAceitos
            );
        }
        
        this.valores = valores;
        this.variavel = variavel;
    }
}
