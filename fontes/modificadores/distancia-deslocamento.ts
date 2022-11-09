import { Modificador } from "./superclasse/modificador";

export class DistanciaDeslocamento extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(
            ["distancia-deslocamento", "distância-deslocamento"], 
            "offset-distance"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
