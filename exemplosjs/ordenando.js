// Função swap: troca os valores de duas posições de um vetor
const swap = (vetor, i, j) => {
    [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
};

// Função shuffle: embaralha os elementos de um vetor
const shuffle = (vetor, qtdTrocas) => {
    for (let i = 0; i < qtdTrocas; i++) {
        const pos1 = Math.floor(Math.random() * vetor.length);
        const pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
};

// Função bubble_sort: ordena o vetor usando Bubble Sort
const bubble_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
    return vetor;
};

// Função selection_sort: ordena o vetor usando Selection Sort
const selection_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[minIdx]) {
                minIdx = j;
            }
        }
        swap(vetor, i, minIdx);
    }
    return vetor;
};

// Função particionamento: apoio ao quick_sort
const particionamento = (vetor, inicio, fim) => {
    const pivot = vetor[fim];
    let i = inicio - 1;

    for (let j = inicio; j < fim; j++) {
        if (vetor[j] <= pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};

// Função quick_sort: ordena o vetor usando Quick Sort
const quick_sort = (vetor, inicio = 0, fim = vetor.length - 1) => {
    if (inicio < fim) {
        const pi = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, pi - 1);
        quick_sort(vetor, pi + 1, fim);
    }
    return vetor;
};
