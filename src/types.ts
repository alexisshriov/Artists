export interface Genre {
  id: string;
  name: string;
  is_primary: string
}

export interface Artist {
  id: string;
  popularity: number;
  name: string;
  genres: Genre[];
  image: string;
}
