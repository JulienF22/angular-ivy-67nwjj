export interface Album {
  id: number;
  title: string;
  title_short: string;
  duration: number;
  rank: number;
  bpm: number;
  artist: {
    id: number;
    name: string;
    link: string;
    picture: string;
  };
  album: {
    id: number;
    title: string;
    cover: string;
  };
}
