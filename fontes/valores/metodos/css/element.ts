import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Element extends MetodoCss {
    simbolo: string;
    referencia: string;
    traducao: string;

    constructor (simbolo: Simbolo, referencia: Simbolo) {
        super();
        this.simbolo = simbolo.lexema;
        this.referencia = referencia.lexema;
        this.traducao = 'element';
    }

    paraTexto(): string {       
        if (this.simbolo !== "#"){
            throw new Error("Atribuição inválida de referência para a função element(). O valor deve ser um id válido (ex.: #meu-id)");
        }

        return `elemento(${this.simbolo}${this.referencia})`;
    }
}
