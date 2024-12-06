/**
 * 
 * @param moeda 
 * Recebe string '1.200,00 retorna number: 1200.00
 * 
 * Se vier vazio, retorna null
 */

export default function moedaParaNumero(moeda: string): number | null {

    console.log(moeda)
    const numero = Number(moeda.replaceAll('.', '').replaceAll(',', '.'))

    return isNaN(numero) ? null : numero 

    // if(isNaN(numero)) {
    //     return null
    // } else {
    //     return numero
    // } 
}

