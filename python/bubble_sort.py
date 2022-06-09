from distutils.dep_util import newer_pairwise
from multiprocessing.dummy import current_process


sequence = [4, 3, 5, 0, 1]
swaps = 0
new_sequence = sequence.copy()
# print(new_sequence)
# Your Code Here
def bubbleSort(new_sequence):
    for x in range(0, len(sequence), 1):
        for y in range(1, len(sequence), 1):
            if new_sequence[x] > new_sequence[y]:
                swaps += 1
                previous = new_sequence[x]
                current = new_sequence[y]
                previous = current
                current = previous
    print(new_sequence)

bubbleSort(new_sequence)