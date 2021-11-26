export interface UiProps {
  title: string;
  showtitle?: boolean;
}
export interface IndexProps {
  countries: [Country];
  teams: [Team];
  players: [Player];
}

export interface Country {
  code: string;
  name: string;
  flag: string;
}

export interface Team {
  country: string;
  name: string;
  logo: string;
  id: string;
}
export interface PlayerProps {
  players: [Player];
}

export interface Player {
  name: string;
  photo: string;
  id: string;
}
