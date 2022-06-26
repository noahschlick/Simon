
export const sort = ({scores}) => {
    var n = scores.length;

    for (var i = n - 1; i > 0; i-- ) {
        var temp = scores[0][1]
        scores[0] = scores[i]
        scores[i][1] = temp

        heapify(scores, i, 0)
    }
}

const heapify = ({scores, n, i}) => {
    var largest = i;
    var l = 2 * i + 1
    var r = 2 * i + 2

    if (l < n && scores[l][1] > scores[largest][1]){
        largest = l;
    }

    if (r < n && scores[r][1] > scores[largest][1]) {
        largest = r
    }

    if (largest != i) {
        var swap = scores[i];
        scores[i] = scores[largest];
        scores[largest] = swap;
        heapify(scores, n, largest)
    }
}