export function calcularTotaldoIng(qtdIng, meioIng, cupom) {
  let tot = 0
    if (meioIng == true) {
        tot = qtdIng * 15.00
      } else {
        tot = qtdIng * 30.00
      }
    
      if (cupom == 'brunex') {
        tot =  tot - (tot * (50 / 100)) 
      }
    
    return tot;
}