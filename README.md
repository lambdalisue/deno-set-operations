# set_operations

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/set_operations)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/set_operations/mod.ts)
[![Test](https://github.com/lambdalisue/deno-set-operations/actions/workflows/test.yml/badge.svg)](https://github.com/lambdalisue/deno-set-operations/actions/workflows/test.yml)

This module provides basic set operations. Most of codes are just translated
from
[JavaScript code in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#implementing_basic_set_operations)
to TypeScript.

## Usage

### `isDisjoint`

Check if the `setA` has no elements in common with `setB`.

```typescript
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { isDisjoint } from "https://deno.land/x/set_operations/mod.ts";

Deno.test("isSubset works properly", () => {
  assertEquals(isSubset(new Set("abc"), new Set("abcdef")), true);
  assertEquals(isSubset(new Set("abc"), new Set("def")), false);
  assertEquals(isSubset(new Set("abcdef"), new Set("abc")), false);
});
```

### `isSubset`

Check if every elements in `setA` is in the `setB`.

```typescript
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { isSubset } from "https://deno.land/x/set_operations/mod.ts";

Deno.test("isSubset works properly", () => {
  assertEquals(isSubset(new Set("abc"), new Set("abcdef")), true);
  assertEquals(isSubset(new Set("abc"), new Set("def")), false);
  assertEquals(isSubset(new Set("abcdef"), new Set("abc")), false);
});
```

### `isSuperset`

Check if every elements in `setB` is in the `setA`.

```typescript
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { isSuperset } from "https://deno.land/x/set_operations/mod.ts";

Deno.test("isSuperset works properly", () => {
  assertEquals(isSuperset(new Set("abc"), new Set("abcdef")), false);
  assertEquals(isSuperset(new Set("abc"), new Set("def")), false);
  assertEquals(isSuperset(new Set("abcdef"), new Set("abc")), true);
});
```

### `union`

Create a new set with elements from the `setA` and the `setB`.

```typescript
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { union } from "https://deno.land/x/set_operations/mod.ts";

Deno.test("union works properly", () => {
  assertEquals(union(new Set("abc"), new Set("def")), new Set("abcdef"));
  assertEquals(union(new Set("abcdef"), new Set("def")), new Set("abcdef"));
  assertEquals(union(new Set("abc"), new Set("abcdef")), new Set("abcdef"));
});
```

### `intersection`

Create a new set with elements common to the `setA` and the `setB`.

```typescript
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { intersection } from "https://deno.land/x/set_operations/mod.ts";

Deno.test("intersection works properly", () => {
  assertEquals(intersection(new Set("abc"), new Set("def")), new Set());
  assertEquals(intersection(new Set("abcdef"), new Set("def")), new Set("def"));
  assertEquals(intersection(new Set("abc"), new Set("abcdef")), new Set("abc"));
});
```

### `difference`

Create a new set with elements in the `setA` that are not in the `setB`.

```typescript
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { difference } from "https://deno.land/x/set_operations/mod.ts";

Deno.test("difference works properly", () => {
  assertEquals(difference(new Set("abc"), new Set("def")), new Set("abc"));
  assertEquals(difference(new Set("abcdef"), new Set("def")), new Set("abc"));
  assertEquals(difference(new Set("abc"), new Set("abcdef")), new Set());
});
```

### `symmetricDifference`

Create a new set with elements in either the `setA` or `setB` but not both.

```typescript
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { symmetricDifference } from "https://deno.land/x/set_operations/mod.ts";

Deno.test("symmetricDifference works properly", () => {
  assertEquals(
    symmetricDifference(new Set("abc"), new Set("def")),
    new Set("abcdef"),
  );
  assertEquals(
    symmetricDifference(new Set("abcdef"), new Set("def")),
    new Set("abc"),
  );
  assertEquals(
    symmetricDifference(new Set("abc"), new Set("abcdef")),
    new Set("def"),
  );
});
```

## License

The code follows MIT license written in [LICENSE](./LICENSE). Contributors need
to agree that any modifications sent in this repository follow the license.
