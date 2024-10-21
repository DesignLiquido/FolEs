import { AlvoDestaque } from "./alvo-destaque";
import { Ativo } from "./ativo";
import { Atual } from "./atual";
import { DentroDoLimite } from "./dentro-do-limite";
import { Desabilitado } from "./desabilitado";
import { DirecaoTexto } from "./direcao-texto";
import { EmBranco } from "./em-branco";
import { Escopo } from "./escopo";
import { EstiloAlvo } from "./estilo-alvo";
import { EstiloPadrao } from "./estilo-padrao";
import { EstruturaEstilo } from "./estrutura-estilo";
import { FilhoUnico } from "./filho-unico";
import { Foco } from "./foco";
import { FocoInterno } from "./foco-interno";
import { FocoVisivel } from "./foco-visivel";
import { ForaDoLimite } from "./fora-do-limite";
import { Futuro } from "./futuro";
import { Habilitado } from "./habilitado";
import { IdiomaGlobal } from "./idioma-global";
import { Indeterminado } from "./indeterminado";
import { Invalido } from "./invalido";
import { LerEscrever } from "./ler-escrever";
import { Link } from "./link"; // Olhar
import { LinkLocal } from "./link-local";
import { LocalReservadoMostrado } from "./local-reservado-mostrado";
import { NFilho } from "./n-filho";
import { NTipo } from "./n-tipo";
import { NUltimoTipo } from "./n-ultimo-tipo";
import { NUltimoFilho } from "./n-último-filho";
import { Obrigatorio } from "./obrigatorio";
import { Opcional } from "./opcional";
import { Passado } from "./passado";
import { Pausa } from "./pausa";
import { PrimeiroFilho } from "./primeiro-filho";
import { PrimeiroTipo } from "./primeiro-tipo";
import { Reproduzir } from "./reproduzir";
import { Sobre } from "./sobre";
import { SomenteLeitura } from "./somente-leitura";
import { TodoLink } from "./todo-link";
import { UltimoFilho } from "./ultimo-filho";
import { UltimoTipo } from "./ultimo-tipo";
import { UnicoTipo } from "./unico-tipo";
import { UsuarioInvalido } from "./usuario-invalido";
import { Valido } from "./valido";
import { Vazio } from "./vazio";
import { Verificado } from "./verificado";
import { Visitado } from "./visitado";

export const DicionarioPseudoClasses: { [nomeFolEs: string]: any } = {
    "alvo-destaque": AlvoDestaque,
    "ativo": Ativo,
    "atual": Atual,
    "dentro-do-limite": DentroDoLimite,
    "desabilitado": Desabilitado,
    "direção-texto": DirecaoTexto, // Recebe parametro
    "direcao-texto": DirecaoTexto, // Recebe parametro
    "em-branco": EmBranco,
    "escopo": Escopo,
    "estilo-alvo": EstiloAlvo,
    "estilo-padrão": EstiloPadrao,
    "estilo-padrao": EstiloPadrao,
    "estrutura-estilo": EstruturaEstilo,
    "filho-unico": FilhoUnico,
    "filho-único": FilhoUnico,
    "foco-interno": FocoInterno,
    "foco-visivel": FocoVisivel,
    "foco-visível": FocoVisivel,
    "foco": Foco,
    "fora-do-limite": ForaDoLimite,
    "futuro": Futuro,
    "habilitado": Habilitado,
    "idioma-global": IdiomaGlobal,
    "indeterminado": Indeterminado,
    "inválido": Invalido,
    "invalido": Invalido,
    "ler-escrever": LerEscrever,
    "link-local": LinkLocal,
    "link": Link,
    "local-reservado-mostrado": LocalReservadoMostrado,
    "n-filho": NFilho, // Recebe parametro
    "n-tipo": NTipo, // Recebe parametro
    "n-último-filho": NUltimoFilho, // Recebe parametro
    "n-ultimo-filho": NUltimoFilho, // Recebe parametro
    "n-último-tipo": NUltimoTipo, // Recebe parametro
    "n-ultimo-tipo": NUltimoTipo, // Recebe parametro
    "obrigatorio": Obrigatorio,
    "opcional": Opcional,
    "passado": Passado,
    "pausa": Pausa,
    "primeiro-filho": PrimeiroFilho,
    "primeiro-tipo": PrimeiroTipo,
    "reproduzir": Reproduzir,
    "sobre": Sobre,
    "somente-leitura": SomenteLeitura,
    "todo-link": TodoLink,
    "último-filho": UltimoFilho,
    "ultimo-filho": UltimoFilho,
    "ultimo-tipo": UltimoTipo,
    "último-tipo": UltimoTipo,
    "unico-tipo": UnicoTipo,
    "único-tipo": UnicoTipo,
    "usuário-inválido": UsuarioInvalido,
    "usuario-invalido": UsuarioInvalido,
    "válido": Valido,
    "valido": Valido,
    "vazio": Vazio,
    "verificado": Verificado,
    "visitado": Visitado,
};