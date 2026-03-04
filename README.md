# Bubble Sort (Ordenação por Bolha)

O **Bubble Sort** não tem um criador específico. Ele é conhecido como uma técnica clássica de ordenação por troca e ficou popular por ser simples e fácil de entender.

A ideia do algoritmo é percorrer a lista várias vezes, comparando elementos vizinhos. Sempre que encontra dois valores fora de ordem, ele troca de posição.

A cada volta completa na lista, o maior elemento "muda" para o final — como se fosse uma bolha subindo na água. É daí que vem o nome **Bubble Sort**.

Esse processo continua até que nenhuma troca precise ser feita, o que significa que a lista está totalmente ordenada.

## Complexidade

No pior caso, sua complexidade é **O(n²)**, o que o torna pouco eficiente para listas grandes.

Se a lista já estiver ordenada (e houver uma verificação para isso), ele pode chegar a **O(n)** no melhor caso.