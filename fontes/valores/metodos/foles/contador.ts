import { Simbolo } from "../../../lexador";
import { Metodo } from "./metodo";

export class Contador extends Metodo {
    nome: string;
    estilo: string;
    traducao: string;
    estilosAceitos: object;

    constructor(nome: Simbolo, estilo: Simbolo) {
        super();
        this.nome = nome.lexema;
        this.estilo = estilo ? estilo.lexema : null;
        this.traducao = "counter";

        this.estilosAceitos = {
            "decimal": "decimal",
            "decimal-zero-esquerda": "decimal-leading-zero",
            "romano-minusculo": "lower-roman",
            "romano-minúsculo": "lower-roman",
            "romano-maiusculo": "upper-roman",
            "romano-maiúsculo": "upper-roman",
            "alfa-minusculo": "lower-alpha",
            "alfa-minúsculo": "lower-alpha",
            "alfa-maiusculo": "upper-alpha",
            "alfa-maiúsculo": "upper-alpha",
            "latino-minusculo": "lower-latin",
            "latino-minúsculo": "lower-latin",
            "latino-maiusculo": "upper-latin",
            "latino-maiúsculo": "upper-latin",
            "georgiano": "georgian",
            "armenio": "armenian",
            "armênio": "armenian",
            "cjk-ideografico": "cjk-ideographic",
            "cjk-ideográfico": "cjk-ideographic",
            "hiragana": "hiragana",
            "hiragana-iroha": "hiragana-iroha",
            "katakana": "katakana",
            "katakana-iroha": "katakana-iroha",
            "coreano-hangul-formal": "korean-hangul-formal",
            "coreano-hanja-formal": "korean-hanja-formal",
            "coreano-hanja-informal": "korean-hanja-informal",
            "japones-formal": "japanese-formal",
            "japonês-formal": "japanese-formal",
            "japones-informal": "japanese-informal",
            "japonês-informal": "japanese-informal",
            "simp-chines-formal": "simp-chinese-formal",
            "simp-chinês-formal": "simp-chinese-formal",
            "simp-chines-informal": "simp-chinese-informal",
            "simp-chinês-informal": "simp-chinese-informal",
            "trad-chines-formal": "trad-chinese-formal",
            "trad-chinês-formal": "trad-chinese-formal",
            "trad-chines-informal": "trad-chinese-informal",
            "trad-chinês-informal": "trad-chinese-informal",
            "etiope-numerico": "ethiopic-numeric",
            "etíope-numérico": "ethiopic-numeric",
        };
    }

    paraTexto() {
        if (this.estilo) {
            const listagemEstilos = Object.keys(this.estilosAceitos);

            if (listagemEstilos.includes(this.estilo)) {
                this.estilo = this.estilosAceitos[this.estilo];
            } else {
                throw new Error(`Valor de estilo ${this.estilo} inválido para a função contador(). Valores aceitos:
                ${Object.keys(this.estilosAceitos).reduce((final, atual) => (final + `, ${atual}`))},`);
            }

            return `counter(${this.nome}, ${this.estilo})`;
        }

        return `counter(${this.nome})`;
    }
}
