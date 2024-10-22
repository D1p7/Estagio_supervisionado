import axios from "axios";
import { carregarContatos } from "./addContato.js";

export const handlePanic = async () => {
    const contatos = await carregarContatos();

    if(contatos.length === 0){
        console.log("Nenhum contato salvo");
        return
    }

    contatos.forEach(async (number) => {
      try {
        const response = await axios.post('Adicionar link', {
          number: number,
          textMessage: {
            text: "Mensagem de teste, um salve Prof"
          },
          options: {
            delay: 0,
            presence: "composing",
            linkPreview: true
          }
        }, {
          headers: {
            'apikey': 'Key'
          }
        });
        console.log(`Mensagem enviada para ${number}:`, response.data);
      } catch (error) {
        console.error('Erro ao enviar para:', number, error.response.data);
      }
    });
}