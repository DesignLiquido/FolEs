import { Simbolo } from "../../../lexador";
import { Metodo } from "./metodo";

export class Elemento extends Metodo {
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
            throw new Error("Atribuição inválida de referência para a função elemento(). O valor deve ser um id válido (ex.: #meu-id)");
        }

        return `element(${this.simbolo}${this.referencia})`;
    }
}
