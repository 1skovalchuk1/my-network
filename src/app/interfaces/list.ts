import { NgIterable } from "@angular/core"

type TList<T> = [T, TList<T>] | null

export class List<T> {
  private _list:TList<T> = null

  constructor() {
  }

  add(value:T) {
    this._list = [value,this._list]
  }

  head():T | null {
    return this._list ? this._list[0] : null
  }

  tail():TList<T> {
    return this._list ? this._list[1] : null
  }

  length():number {
    const f = (list:TList<T>):number => {
      if (list) {
        return 1+f(list[1])
      }
      return 0
    }
    return f(this._list)
  }

  [Symbol.iterator]():ListIterator<T> {
    return new ListIterator(this._list)
  }
}

class ListIterator<T> implements Iterator<T> {
   
  private done: boolean;
  private value: TList<T>;

  constructor(private list: TList<T>) {
    this.done = false
    this.value = list
  }

  next(): IteratorResult<T, undefined> {
    if (this.value) {
      const value = this.value[0]
      this.value = this.value[1]
      return { done: false, value };
    }
    return {done: true, value: undefined}
  }

 }