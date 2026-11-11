export interface City {
  name: string;
}

export interface State {
  name: string;
  cities: City[];
}

export interface Country {
  name: string;
  states: State[];
}
