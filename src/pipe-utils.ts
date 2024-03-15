export function filter<T>(filter: (item: T) => boolean) {
  return function* (generator: Iterable<T>) {
    for (const item of generator) {
      if (filter(item)) {
        yield item;
      }
    }
  };
}

export function tap<T>(handler: (item: T) => void) {
  return function* (generator: Iterable<T>) {
    for (const item of generator) {
      handler(item);
      yield item;
    }
  };
}

export function join(glue = '') {
  return function* <T>(generator: Iterable<T>) {
    let items: T[] = [];
    for (const item of generator) {
      items.push(item);
    }
    yield items.join(glue);
  };
}

export function isIterable(obj: any) {
  if (obj === null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}

export function map<T, O>(
  mapFn: (input: T) => O,
): (input: Iterable<T>) => Iterable<O> {
  return function* (generator: Iterable<T>) {
    for (const item of generator) {
      yield mapFn(item);
    }
  };
}

export function switchMap<T, O>(
  mapFn: (input: T) => Iterable<O>,
): (input: Iterable<T>) => Iterable<O> {
  return function* (generator: Iterable<T>) {
    for (const item of generator) {
      const res = mapFn(item);
      yield* res;
    }
  };
}

export function count() {
  return function (generator: Generator) {
    let count = 0;
    for (const _item of generator) {
      count++;
    }
    return count;
  };
}

export function* unique<T>(items: Iterable<T>): Iterable<T> {
  const itemSet = new Set<T>();
  for (const item of items) {
    if (!itemSet.has(item)) {
      yield item;
      itemSet.add(item);
    }
  }
}

export function* uniqueCount<T>(items: Iterable<T>): Iterable<{
  item: T;
  count: number;
}> {
  const itemCountMap = new Map<T, number>();

  for (const item of items) {
    if (!itemCountMap.has(item)) {
      itemCountMap.set(item, 0);
    }

    itemCountMap.set(item, itemCountMap.get(item)! + 1);
  }

  for (const [item, count] of itemCountMap.entries()) {
    yield {
      count,
      item,
    };
  }
}

export function* reverse<T>(items: Iterable<T>) {
  yield* [...items].reverse();
}

export function sortVia<T>(
  sortFn: (a: T, b: T) => number,
): (input: Iterable<T>) => Iterable<T> {
  return function* (items: Iterable<T>) {
    yield* [...items].sort(sortFn);
  };
}

export function sortBy<T, K = T[keyof T]>(
  key: keyof T | ((item: T) => string),
) {
  const sortFn = (a: T, b: T) => {
    const aVal = (typeof key === 'function' ? key(a) : a[key]) as K;
    const bVal = (typeof key === 'function' ? key(b) : b[key]) as K;

    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return aVal.localeCompare(bVal);
    }

    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return aVal - bVal;
    }

    return 0;
  };
  return function* (items: Iterable<T>) {
    yield* [...items].sort(sortFn);
  };
}

export function groupBy<T, K = T[keyof T]>(
  key: keyof T | ((item: T) => string),
) {
  return function* (items: Iterable<T>) {
    const map = new Map<K, T[]>();
    for (const item of items) {
      const keyVal = (typeof key === 'function' ? key(item) : item[key]) as K;
      if (!map.has(keyVal)) {
        map.set(keyVal, []);
      }
      map.get(keyVal)?.push(item);
    }

    for (const [k, items] of map.entries()) {
      yield {
        group: k,
        items,
      };
    }
  };
}
