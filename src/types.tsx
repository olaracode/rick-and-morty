export interface Characters {
  id: number;
  image: string;
  name: string;
  species: string;
  origin: string;
  location: string;
  status: string;
}

export type AppsProps = {
  location: string;
  navigate: Function;
};

export type BannerProps = {
  img: string;
  text: string;
};

export type MainCardProps = {
  id: number;
};

export interface CardCharacter {
  name: "string";
  image: "string";
  id: "number";
}
