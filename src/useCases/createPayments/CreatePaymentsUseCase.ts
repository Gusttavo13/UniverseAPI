import { client } from "../../services/prisma"

type IRouteRequest = {
  reqGN: any
  H56Mru68273NBEx5AjR3pT: number
  M25tZBeM8G8gCuHFBx4KcN: string
}

class CreatePaymentsUseCase {

  async pix( reqGN, H56Mru68273NBEx5AjR3pT, M25tZBeM8G8gCuHFBx4KcN : IRouteRequest) {

    const dataCob = {
      calendario: {
        expiracao: 7200
      },
      valor: {
        original: `${parseFloat(H56Mru68273NBEx5AjR3pT).toFixed(2)}`
      },
      chave: 'mudandogames@gmail.com',
      solicitacaoPagador: `${M25tZBeM8G8gCuHFBx4KcN}`
    };

    const cobResponse = await reqGN.post('/v2/cob', dataCob);

    const qrcodeResponse = await reqGN.get(`/v2/loc/${cobResponse.data.loc.id}/qrcode`);

    return ({
      data: {
        txid: cobResponse.data.txid,
        total: cobResponse.data.valor.original,
        urlPix: qrcodeResponse.data.qrcode,
        imagemQrcode: qrcodeResponse.data.imagemQrcode
      }
    })
  }

  async card( reqGN, H56Mru68273NBEx5AjR3pT, M25tZBeM8G8gCuHFBx4KcN : IRouteRequest) {

  }

}

export { CreatePaymentsUseCase } 