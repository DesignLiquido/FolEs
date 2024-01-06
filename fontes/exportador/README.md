# Exportador

A função do exportador é escrever arquivos. Por ora, este exportador fica neste projeto mesmo, mas pode ser que precisemos migrar o exportador para um projeto dedicado a Node.js, assim como foi feito com Delégua. A razão disso é que JavaScript tradicional não tem acesso a um sistema de arquivos, e execuções de FolEs em um navegador de internet têm de ser possíveis. 