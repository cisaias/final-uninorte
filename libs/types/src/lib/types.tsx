export interface UiProps {
  title: string;
  showtitle?: boolean;
}
export  interface IndexProps {
  countries: [Country];
}


export  interface Country {
  code: string;
  name: string;
  flag: string;
}

export  interface TeamsProps {
  teams: [Team];
}
export  interface Team {
  country: string;
  name: string;
  logo: string;
  id: string;
}