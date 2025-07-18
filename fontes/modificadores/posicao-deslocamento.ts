import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicaoDeslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["posicao-deslocamento", "posição-deslocamento"],
            "offset-position",
            pragmas,
        );

        // OBS.: Esse modificador está listado como Experimental
        // Atualmente, não há compatibilidade desse seletor com nenhum browser

        // OBS.: Também pode receber DOIS números com quantificador como parâmetro
        // Ex.: posicao-deslocamento: 25% 75%;

        // Porém, essa validação inicial cobre somente as posições e os valores globais

        if (!valorVariavel)
            validarValoresAdicionais(
                "posição-deslocamento",
                valores,
                posicoesBasicas,
                this.valoresAceitos,
            );

        this.valores = valores;
    }
}
