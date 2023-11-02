import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class LarguraImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("largura-imagem-borda", "border-image-width", pragmas);

        // OBS.: Também pode receber também mais de um valor número-quantificador
        // Ex.: largura-imagem-borda: 5% 2em 10% auto;
        // TODO: Ajustar lógica para cobrir todos os casos possíveis de atribuição de valores.
        validarValorNumerico('largura-imagem-borda', valor, this.valoresAceitos);

        this.valor = valor;

        // A condicional aqui parte do quantificador, e não do valor,
        // pois o modificador aceita receber valores numéricos sem quantificador
        // Exemplo: largura-imagem-borda: 3;
        if (quantificador !== undefined) {
            validarQuantificador('largura-imagem-borda', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
