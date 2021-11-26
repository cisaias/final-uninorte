import Link from 'next/link';
export function about() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div>
      <p>Nosotros</p>
      <Link href="/index"> Inicio
      </Link>
    </div>
  );
}

export default about;