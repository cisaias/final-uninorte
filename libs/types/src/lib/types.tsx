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
}