import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Counter extends MetodoCss {
    nome: string;
    estilo: string;
    traducao: string;
    estilosAceitos: Object;

    constructor(nome: Simbolo, estilo: Simbolo) {
        super();
        this.nome = nome.lexema;
        this.estilo = estilo ? estilo.lexema : null;
        this.traducao = "counter";

        this.estilosAceitos = {
            "decimal": "decimal",
            "decimal-leading-zero": "decimal-zero-esquerda",
            "lower-roman": "romano-minúsculo",
            "upper-roman": "romano-maiúsculo",
            "lower-alpha": "alfa-minúsculo",
            "upper-alpha": "alfa-maiúsculo",
            "lower-latin": "latino-minúsculo",
            "upper-latin": "latino-maiúsculo",
            "georgian": "georgiano",
            "armenian": "armênio",
            "cjk-ideographic": "cjk-ideográfico",
            "hiragana": "hiragana",
            "hiragana-iroha": "hiragana-iroha",
            "katakana": "katakana",
            "katakana-iroha": "katakana-iroha",
            "korean-hangul-formal": "coreano-hangul-formal",
            "korean-hanja-formal": "coreano-hanja-formal",
            "korean-hanja-informal": "coreano-hanja-informal",
            "japanese-formal": "japonês-formal",
            "japanese-informal": "japonês-informal",
            "simp-chinese-formal": "simp-chinês-formal",
            "simp-chinese-informal": "simp-chinês-informal",
            "trad-chinese-formal": "trad-chinês-formal",
            "trad-chinese-informal": "trad-chinês-informal",
            "ethiopic-numeric": "etíope-numérico",
        };
    }

    paraTexto() {
        if (this.estilo) {
            const listagemEstilos = Object.keys(this.estilosAceitos);

            if (listagemEstilos.includes(this.estilo)) {
                this.estilo = this.estilosAceitos[this.estilo];
            } else {
                throw new Error(`Valor de estilo ${this.estilo} inválido para a função counter(). Valores aceitos:
                ${Object.keys(this.estilosAceitos).reduce((final, atual) => (final += `, ${atual}`))},`);
            }

            return `contador(${this.nome}, ${this.estilo})`;
        }

        return `contador(${this.nome})`;
    }
}
