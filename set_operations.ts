/**
 * Check if the `setA` has no elements in common with `setB`.
 * Sets are disjoint if and only if there intersection is the empty set.
 */
export function isDisjoint<T>(setA: Set<T>, setB: Set<T>): boolean {
  return intersection(setA, setB).size === 0;
}

/**
 * Check if every elements in `setA` is in the `setB`.
 */
export function isSubset<T>(setA: Set<T>, setB: Set<T>): boolean {
  return isSuperset(setB, setA);
}

/**
 * Check if every elements in `setB` is in the `setA`.
 */
export function isSuperset<T>(setA: Set<T>, setB: Set<T>): boolean {
  for (const elem of setB) {
    if (!setA.has(elem)) {
      return false;
    }
  }
  return true;
}

/**
 * Create a new set with elements from the `setA` and the `setB`.
 */
export function union<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}

/**
 * Create a new set with elements common to the `setA` and the `setB`.
 */
export function intersection<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  const _intersection: Set<T> = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

/**
 * Create a new set with elements in the `setA` that are not in the `setB`.
 */
export function difference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

/**
 * Create a new set with elements in either the `setA` or `setB` but not both.
 */
export function symmetricDifference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  const _difference = new Set(setA);
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}
