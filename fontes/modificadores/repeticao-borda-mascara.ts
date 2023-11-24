import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RepeticaoBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "esticar": "stretch",
        "repetir": "repeat",
        "arredondar": "round",
        "espacar": "space",
        "espaçar": "space",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["repeticao-borda-mascara", "repetição-borda-máscara"],
            "mask-border-repeat", 
            pragmas
        );

        validarValores('repetição-borda-máscara', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
