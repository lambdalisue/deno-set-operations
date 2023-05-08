import { assertEquals } from "https://deno.land/std@0.186.0/testing/asserts.ts";
import {
  difference,
  intersection,
  isDisjoint,
  isSubset,
  isSuperset,
  symmetricDifference,
  union,
} from "./set_operations.ts";

Deno.test("isDisjoint works properly", () => {
  assertEquals(isDisjoint(new Set("abc"), new Set("def")), true);
  assertEquals(isDisjoint(new Set("abc"), new Set("cde")), false);
});

Deno.test("isSubset works properly", () => {
  assertEquals(isSubset(new Set("abc"), new Set("abcdef")), true);
  assertEquals(isSubset(new Set("abc"), new Set("def")), false);
  assertEquals(isSubset(new Set("abcdef"), new Set("abc")), false);
});

Deno.test("isSuperset works properly", () => {
  assertEquals(isSuperset(new Set("abc"), new Set("abcdef")), false);
  assertEquals(isSuperset(new Set("abc"), new Set("def")), false);
  assertEquals(isSuperset(new Set("abcdef"), new Set("abc")), true);
});

Deno.test("union works properly", () => {
  assertEquals(union(new Set("abc"), new Set("def")), new Set("abcdef"));
  assertEquals(union(new Set("abcdef"), new Set("def")), new Set("abcdef"));
  assertEquals(union(new Set("abc"), new Set("abcdef")), new Set("abcdef"));
});

Deno.test("intersection works properly", () => {
  assertEquals(intersection(new Set("abc"), new Set("def")), new Set());
  assertEquals(intersection(new Set("abcdef"), new Set("def")), new Set("def"));
  assertEquals(intersection(new Set("abc"), new Set("abcdef")), new Set("abc"));
});

Deno.test("difference works properly", () => {
  assertEquals(difference(new Set("abc"), new Set("def")), new Set("abc"));
  assertEquals(difference(new Set("abcdef"), new Set("def")), new Set("abc"));
  assertEquals(difference(new Set("abc"), new Set("abcdef")), new Set());
});

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
