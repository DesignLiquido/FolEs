import { Simbolo } from "../../../lexador";
import { cores } from "../../../modificadores/atributos/cores";
import { Metodo } from "./metodo";

export class RepetirGradienteRadial extends Metodo {
    parametro1: string;
    valor1: number;
    quantificador1: string;
    valor2: number;
    quantificador2: string;
    valor3: number;
    quantificador3: string;
    valor4: number;
    quantificador4: string;
    valor5: number;
    quantificador5: string;
    valor6: number;
    quantificador6: string;
    arrayValores: Array<number | string> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(
        parametro1: Simbolo,
        valor1: Simbolo, quantificador1: Simbolo,
        valor2?: Simbolo, quantificador2?: Simbolo,
        valor3?: Simbolo, quantificador3?: Simbolo,
        valor4?: Simbolo, quantificador4?: Simbolo,
        valor5?: Simbolo, quantificador5?: Simbolo,
        valor6?: Simbolo, quantificador6?: Simbolo,
    ) {
        super();
        this.parametro1 = parametro1.lexema;
        this.valor1 = Number(valor1.lexema);
        this.quantificador1 = quantificador1 ? quantificador1.lexema : null;
        this.valor2 = valor2 ? Number(valor2.lexema) : null;
        this.quantificador2 = quantificador2 ? quantificador2.lexema : null;

        this.valor3 = valor3 ? Number(valor3.lexema) : null;
        this.quantificador3 = quantificador3 ? quantificador3.lexema : null;
        this.valor4 = valor4 ? Number(valor4.lexema) : null;
        this.quantificador4 = quantificador4 ? quantificador4.lexema : null;

        this.valor5 = valor5 ? Number(valor5.lexema) : null;
        this.quantificador5 = quantificador5 ? quantificador5.lexema : null;
        this.valor6 = valor6 ? Number(valor6.lexema) : null;
        this.quantificador6 = quantificador6 ? quantificador6.lexema : null;

        this.arrayValores.push(
            this.parametro1, this.valor1, this.quantificador1, this.valor2, this.quantificador2,
            this.valor3, this.quantificador3, this.valor4, this.quantificador4,
            this.valor5, this.quantificador5, this.valor6, this.quantificador6,
        );

        this.arrayValores = this.arrayValores.filter((valorIndividual) => valorIndividual !== null);

        this.valoresAceitos = {
            'lado-mais-proximo': 'closest-side',
            'lado-mais-próximo': 'closest-side',
            'canto-mais-próximo': 'closest-corner',
            'canto-mais-proximo': 'closest-corner',
            'lado-mais-distante': 'farthest-side',
            'canto-mais-distante': 'farthest-corner',
            'circulo': 'circle',
            'círculo': 'circle',
        };

        this.traducao = "repeating-radial-gradient";
    }

    paraTexto() {
        let traducaoRetorno: string = '';
        
        this.arrayValores.forEach((valorIndividual, index) => {
            const limiteArray: number = this.arrayValores.length - 1;
            const indicesComVirgula: Array<number> = [0, 6, 12];            
            if (valorIndividual) {
                if (typeof valorIndividual === 'number') {
                    traducaoRetorno += ` ${valorIndividual}`;
                } else {
                    const coresFolEs: Array<string> = Object.keys(cores);
                    if (coresFolEs.includes(valorIndividual)) {
                        if (index === 0) {
                            traducaoRetorno += `${cores[valorIndividual]}`;
                        } else {
                            traducaoRetorno += ` ${cores[valorIndividual]}`;
                        }
                    } else if (this.valoresAceitos[valorIndividual]) {
                        if (index === 0) {
                            traducaoRetorno += `${this.valoresAceitos[valorIndividual]}`;
                        } else {
                            traducaoRetorno += ` ${this.valoresAceitos[valorIndividual]}`;
                        }
                    } else {                        
                        traducaoRetorno += `${valorIndividual}`;
                    }

                    if (indicesComVirgula.includes(index) && index < limiteArray) {
                        traducaoRetorno += ',';
                    }
                }
            }
        });

        return `repeating-radial-gradient(${traducaoRetorno})`;
    }
}
