# Arrays

Arrays are data structures that are collocated in the same block of memory and are accessed using numbered indexes. In most languages arrays are statically sized at construction, but JavaScript allows all arrays to be dynamically resized.

It is important to note that arrays in JavaScript are actually Objects, which means they are implemented using hashtables rather than real arrays. This reality impacts some of the complexity analysis of individual methods.

---

## ArrayInterface

#### `insert(element)`

Insert an item into the array.

##### Parameters

__element__ - _any_ element to insert into the array.

##### Returns

_number_ the new array length.

--

#### `removeElement(element)`

Remove an element from the array.

##### Parameters

__element__ - _any_ element to remove from the array.

##### Returns

_any_ the removed element.

--

#### `removeAtIndex(index)`

Remove an element from the array at the given index.

##### Parameters

__index__ - _number_ index of element to remove from the array.

##### Returns

_any_ the removed element.

--

#### `search(element)`

Find an element in the array.

##### Parameters

__element__ - _any_ the element to search for in the array.

##### Returns

_number_ the index of the found element or `-1` if not found.

--

#### `get(index)`

Get the element at an index.

##### Parameters

__index__ - _number_ the index to retrieve an element from in the array.

##### Returns

_any_ the element at the given index, or `undefined`.

---

## Implementations

### UnorderedArray

An array where order is not guaranteed. This allows us to do deletes at an index in constant time since elements don't have to be shifted.

Pros: `insert*`, `removeAtIndex`, and `get` are all constant time (`*` amortized)

Cons: order not guaranteed or maintained, `search` is in linear time.
