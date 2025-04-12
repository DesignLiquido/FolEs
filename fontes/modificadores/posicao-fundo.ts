import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class PosicaoFundo extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["posicao-fundo", "posição-fundo"],
            "background-position",
            pragmas,
        );

        if (!valorVariavel) {
            validarValorNumerico("posição-fundo", valor, posicoesBasicas);

            if (Number(parseInt(valor))) {
                const quantificadoresAceitos = {
                    px: "px",
                    "%": "%",
                    rem: "rem",
                    vmin: "vmin",
                    vmax: "vmax",
                };

                validarQuantificador(
                    "posição-fundo",
                    quantificador,
                    quantificadoresAceitos,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
