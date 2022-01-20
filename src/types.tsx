export interface Characters {
  id: number;
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
