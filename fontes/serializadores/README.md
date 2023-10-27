# Serializadores

Serializadores são classes que efetivamente escrevem os arquivos de saída. 

Nas primeiras implementações de FolEs, os tradutores faziam este papel. Com a inclusão da funcionalidade de geração de mapas de código, os tradutores passaram a gerar uma estrutura de dados intermediária, muito semelhante ao que é gerado pela análise sintática. Essas estruturas possuem todos os pragmas (linha, coluna inicial e coluna final de cada símbolo) recalculados pela tradução. 