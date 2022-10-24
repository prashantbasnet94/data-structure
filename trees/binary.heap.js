/*
Heaps:
    Priority Queue
    Binary Heap:
    Every child belongs to a parent node that has greater priority or value

    Max heap : where parent is greater than chiild
    Min Heap : where child is greater than parent

    Lookup => O(N)
    insert => O(logN)
    delete => O(logN)

    Heap can be used in any algorithm where ordering is important

    With array we have random access, it allowed us to randomly access any element using index
    In linked list, we can change things dynamically. But finding a node is linear time i.e O(N)

    Heaps are little bit different

    Compare to binary search tree: look up takes more time but what's effective?

    Why use binary heap?
    Binary heaps are really really great at doing comparative operation.

            101
        72        33
    2       45 5      1

    just like get all values greater than 33?
    just grab the upper level items instead of of going down finidng it
    Whreas in binary search tree it is O(N)

    Heaps are used alot in Data storage, prority queues, sorting algorithms
    

*/