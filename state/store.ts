import React from "react";
import { action, computed, makeObservable, observable } from "mobx";

// This is a very basic store example. Add @observeable's to the store that can
// be use anywhere in your application. Refer to the starter's README and mobx
// documentation: https://mobx.js.org/react-integration.html
export class Store {
  @observable someKey = "some value";

  constructor() {
    makeObservable(this);
  }

  @action
  setValue(value: string) {
    this.someKey = value;
  }

  @computed
  get computedValue() {
    return this.someKey.toUpperCase;
  }
}

const store = new Store();
export const StoreContext = React.createContext<Store>(store);
export const useStore = () => React.useContext(StoreContext);
