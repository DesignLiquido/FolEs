import { ListaDeCores } from "./atributos/cores";
import { Modificador } from "./superclasse/modificador";

export class CorFundo extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("cor-fundo", "background-color");
        this.valor = valor;

        // Lista de cores como valor
        if (!(valor in ListaDeCores)) {
            throw new Error(`Propriedade 'cor-fundo' com valor ${valor} inválido. Valores aceitos: ${Object.keys(ListaDeCores).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        // Há ainda os casos de:
        // rgb / rgba - ex.: rgb(255, 255, 128)
        // hsl / hsla - ex.: hsl(50, 33%, 25%)


        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}

const a = new CorFundo("azl");
console.log(a);
