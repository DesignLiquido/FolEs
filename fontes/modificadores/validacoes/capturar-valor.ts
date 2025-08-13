import { Valor, ValorNumerico, ValorQualitativo, ValorTexto } from "../../valores";
import { MetodoCss } from "../../valores/metodos/css/metodo-css";
import { Metodo } from "../../valores/metodos/foles/metodo";

export function capturarValor(valores: Valor[]): {
    valor: string | number, metodo: boolean, numerico: boolean
} {
    let valorMapeado: { valor: string | number, metodo: boolean, numerico: boolean } = {
        valor: '',
        metodo: false,
        numerico: false,
    }
    
    if (valores[0] instanceof ValorQualitativo) {
        valorMapeado.valor = valores[0].qualitativo;
    } else if (valores[0] instanceof ValorNumerico) {
        valorMapeado.valor = valores[0].literalNumerico;
        valorMapeado.numerico = true;
    } else if (valores[0] instanceof ValorTexto) {
        valorMapeado.valor = valores[0].literalTexto;
        valorMapeado.valor = valorMapeado.valor.replace(/^["']|["']$/g, '');
    } else if (valores[0] instanceof Metodo || valores[0] instanceof MetodoCss) {
        if (valores[0].traducao) {
            valorMapeado.valor = valores[0].traducao;
        } else {
            valorMapeado.valor = valores[0].constructor.name.toLowerCase();
        }
        valorMapeado.metodo = true;
    }

    return valorMapeado;
}