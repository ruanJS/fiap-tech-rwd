import { Link } from "react-router-dom";
export default function Solucao() {
  <Link to="/solucao/"></Link>;
  return (
    <>
      <div className="Solucao">
      <h1>Solução</h1>
      <p>
        Nosso projeto, inicialmente se baseia em um intermediário do processo de
        contato do segurado do nosso cliente e a Porto. Iniciando o contato com
        um chatbot para WhatsApp/Aplicativo Porto, onde será encaminhado para o
        usuário um link direcionando para um site contendo um formulário para
        preencher as informações necessárias para a abertura do chamado. Nesse
        formulário será pedido informações do seguro do cliente, informações do
        veículo, situação do veículo, e se necessário fotos da placa e da
        situação do veículo.
      </p>
      <img src="./public/fabrica.png" alt="" />
      </div>

      <div className="Solucao-2">
      <h1>Ideias</h1>
      <p>
        Para atendimentos pelo telefone, o atendente irá seguir as mesmas
        perguntas do formulário. Caso haja a necessidade o telefonista pedirá
        fotos ao cliente e solicitará que as envie pelo WhatsApp. Após o
        recebimento desses dados, o nosso sistema, que mapeará as informações
        necessárias, irá passar para o ChatGPT as informações e características
        de todos os modais disponíveis pela Porto Seguro, e as informações do
        veículo (altura, largura, peso, modelo, situação), para que assim o
        próprio ChatGPT, recebendo todas essas informações, decida quais são os
        modais que podem ser usados para resolver o problema. Assim, o sistema
        de taxa tarifária decidirá qual será o modal com melhor custo-benefício.
      </p>
      <img src="./public/ideia.png" alt="" />
      </div>
    </>
  );
}
