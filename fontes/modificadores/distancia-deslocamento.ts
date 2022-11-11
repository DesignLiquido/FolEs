import { Modificador } from "./superclasse/modificador";

export class DistanciaDeslocamento extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["distancia-deslocamento", "distância-deslocamento"], 
            "offset-distance"
        );
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
