import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RepetirImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "esticar": "stretch",
        "repetir": "repeat",
        "completar": "round",
        "espacar": "space",
        "espaçar": "space",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("repetir-imagem-borda", "border-image-repeat", pragmas);
        
        validarValores('repetir-imagem-borda', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
