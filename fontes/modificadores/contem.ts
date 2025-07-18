import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Contem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        estrito: "strict",
        "modo-conteudo": "content",
        "modo-conteúdo": "content",
        tamanho: "size",
        "tamanho-alinhado": "inline-size",
        layout: "layout",
        estilo: "style",
        pintar: "paint",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["contem", "contém"], "contain", pragmas);

        if (!valorVariavel)
            validarValores("contém", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
