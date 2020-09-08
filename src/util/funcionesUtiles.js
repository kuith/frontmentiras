
export function sustituirRetornos(textoJson) {
  var resultado = textoJson.replace(/\n/g, '<br/>');
  return resultado;
}
// ejemplo de uso unsafeHTML(this.sustituirRetornos(this.investigador.trasfondo))

export const UrlBaseImagenes = '../src/util/images/';


/* export function sustituirRetornos(texto) {
  texto.split("\n").map((item, i) =>{
    return (
      <p key={i}>{item}</p>
    )
  });
} */