export interface UiProps {
  title: string;
  showtitle?: boolean;
}

export interface IndexProps {
  countries: [Country];
  teams: [Team];
  players: [Player];
}
export interface CountriesProps {
  countries: [Country];
  setCountry: (country: string) => void;
}
export interface Country {
  code: string;
  name: string;
  flag: string;
}
export interface TeamProps {
  selectedCountry: string;
  teams: [Team];
  setTeam: (team: string) => void;
}
export interface Team {
  country: string;
  name: string;
  logo: string;
  id: string;
}
export interface PlayerProps {
  selectedTeam: string;
  players: [Player];
}

export interface Player {
  name: string;
  photo: string;
  id: string;
}
