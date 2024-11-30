import fetchData from "./fetchData.js";


type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
type TransacaoStatus = "Paga" | "Recusada pela operadora de cartão" | "Aguardando pagamento" | "Aguardando pagamento";

interface TransaçãoAPI {
  Nome: string
  ID: number;
  Data: string,
  Status: TransacaoStatus,
  Email: string,
  ['Valor (R$)']: string,
  ['Forma de Pagamento']: TransacaoPagamento;
  ['Cliente Novo']: number,


}

async function handleData() {
  const data = await fetchData<TransaçãoAPI[]>("https://api.origamid.dev/json/transacoes.json")

  if (data) {
    data.forEach((item) => {
      console.log(item)
    });
  }

  console.log('ok ok')
}


handleData()