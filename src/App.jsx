import Header from './components/Header';
import conspiraPizzaImage from './assets/conspira_pizza.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <section className="my-8 text-center">
          <img src={conspiraPizzaImage} alt="Agência Ve Marketing Digital" className="mx-auto mb-4 w-48 h-48" />
          <h1 className="text-4xl font-bold">Agência Ve Marketing Digital</h1>
          <h2 className="text-2xl mb-8">30.065.273/0001-85</h2>
          <h2 className="text-3xl font-bold mb-4">NOSSA MISSÃO:</h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            "Oferecer soluções completas em marketing digital com qualidade, inovação e resultados mensuráveis, transformando a presença online de nossos clientes em experiências únicas e impactantes. Com mais de 7 anos de experiência no mercado, buscamos superar as expectativas através de estratégias personalizadas, atendimento especializado e transparência total. Nossa missão é ajudar empresas a crescerem no ambiente digital, criando campanhas que reflitam profissionalismo, criatividade e retorno sobre investimento, tornando cada projeto uma história de sucesso."
          </p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CONTATO:</h2>
          <p className="text-lg">Telefone: (31) 973198749</p>
          <p className="text-lg">E-mail: contato@corssar.com</p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">QUEM SOMOS?</h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            A <strong className="font-bold">Agência Ve Marketing Digital</strong>, registrada sob o CNPJ <strong className="font-bold">30.065.273/0001-85</strong>, foi fundada em <strong className="font-bold">28 de março de 2018</strong>, na cidade de <strong className="font-bold">Brasília, Distrito Federal</strong>. Como uma empresa consolidada no mercado, atuamos no segmento de <strong className="font-bold">marketing digital e comunicação empresarial</strong>, oferecendo serviços que unem <strong className="font-bold">estratégia, criatividade e tecnologia</strong> para transformar a presença digital de nossos clientes.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Nossa atividade principal abrange desde <strong className="font-bold">gestão de redes sociais, criação de conteúdo, campanhas de tráfego pago até desenvolvimento de sites e branding</strong>. Com mais de <strong className="font-bold">7 anos de experiência</strong>, nos destacamos pela <strong className="font-bold">personalização de estratégias, análise de dados e atendimento consultivo</strong>, sempre buscando atender às necessidades específicas de cada cliente e gerar resultados concretos.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Localizada no <strong className="font-bold">Setor SGCV Lt 15, S/N, Bloco C Sala 314, Guará, Brasília-DF (CEP 71215-650)</strong>, nossa agência é referência na região, proporcionando soluções digitais completas e personalizadas. Valorizamos a <strong className="font-bold">transparência, a inovação e a satisfação do cliente</strong>, garantindo que cada projeto seja executado com excelência e foco em resultados.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Na <strong className="font-bold">Agência Ve Marketing Digital</strong>, acreditamos que <strong className="font-bold">uma presença digital forte reflete o profissionalismo e a visão de quem empreende</strong>. Por isso, nosso compromisso vai além da prestação de serviços: queremos ajudar você a <strong className="font-bold">construir uma marca sólida, alcançar seu público-alvo e crescer de forma sustentável</strong> no ambiente digital.
          </p>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Produtos e Serviços Disponíveis:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Gestão de Redes Sociais</strong> – Planejamento, criação de conteúdo e engajamento estratégico.</li>
            <li><strong className="font-bold">Tráfego Pago (Ads)</strong> – Campanhas no Google, Facebook, Instagram e outras plataformas.</li>
            <li><strong className="font-bold">Criação de Sites e Landing Pages</strong> – Desenvolvimento profissional e responsivo.</li>
            <li><strong className="font-bold">Branding e Identidade Visual</strong> – Criação de logotipos, manuais de marca e materiais gráficos.</li>
            <li><strong className="font-bold">Consultoria em Marketing Digital</strong> – Análise, estratégia e planejamento personalizado.</li>
            <li><strong className="font-bold">Produção de Conteúdo</strong> – Textos, vídeos, imagens e materiais para blogs e redes sociais.</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Informações da Empresa:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Razão Social:</strong> Agencia Ve Marketing Digital LTDA</li>
            <li><strong className="font-bold">Nome Fantasia:</strong> Agencia Ve Marketing Digital</li>
            <li><strong className="font-bold">CNPJ:</strong> 30.065.273/0001-85</li>
            <li><strong className="font-bold">Data de Abertura:</strong> 28/03/2018</li>
            <li><strong className="font-bold">Porte:</strong> Empresa de Pequeno Porte</li>
            <li><strong className="font-bold">Natureza Jurídica:</strong> Sociedade Empresária Limitada</li>
            <li><strong className="font-bold">Opção pelo MEI:</strong> Não</li>
            <li><strong className="font-bold">Opção pelo Simples:</strong> Não</li>
            <li><strong className="font-bold">Data Opção - Exclusão Simples:</strong> 28/03/2018 - 31/12/2020</li>
            <li><strong className="font-bold">Situação Cadastral:</strong> Ativa</li>
            <li><strong className="font-bold">Data Situação Cadastral:</strong> 28/03/2018</li>
            <li><strong className="font-bold">Tipo:</strong> Matriz</li>
            <li><strong className="font-bold">Capital Social:</strong> R$ 20.000,00</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Localização e Contato:</h3>
          <p className="text-lg">📍 <strong className="font-bold">Endereço:</strong> Setor SGCV Lt 15, S/N, Bloco C Sala 314, Guará, Brasília-DF, <strong className="font-bold">CEP 71215-650</strong></p>
          <p className="text-lg">📞 <strong className="font-bold">Telefone/WhatsApp:</strong> <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">(31) 973198749</a></p>
          <p className="text-lg">📧 <strong className="font-bold">E-mail:</strong> <a href="mailto:contato@corssar.com" className="text-blue-500 hover:underline">contato@corssar.com</a></p>
          <p className="text-lg mt-4">Na <strong className="font-bold">Agência Ve Marketing Digital</strong>, estamos prontos para ajudar você a <strong className="font-bold">transformar sua presença digital</strong>. Entre em contato e descubra como <strong className="font-bold">estratégias bem planejadas podem impulsionar seu negócio!</strong> 🚀✨</p>
        </section>

        <section className="my-8 text-center">
          <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><h2 className="text-3xl font-bold mb-4">Fale conosco:</h2></a>
          {/* Formulário de contato ou link para WhatsApp */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-xl font-bold mb-4">RODAPÉ & POLÍTICA DE PRIVACIDADE</h3>
          <h4 className="text-lg font-bold mb-2">Agencia Ve Marketing Digital LTDA</h4>
          <p className="text-sm"><strong>CNPJ:</strong> 30.065.273/0001-85</p>
          <p className="text-sm"><strong>Razão Social:</strong> Agencia Ve Marketing Digital LTDA</p>
          <p className="text-sm"><strong>Nome Fantasia:</strong> Agencia Ve Marketing Digital</p>
          <p className="text-sm"><strong>Data de Abertura:</strong> 28/03/2018</p>
          <p className="text-sm"><strong>Porte:</strong> Empresa de Pequeno Porte</p>
          <p className="text-sm"><strong>Natureza Jurídica:</strong> Sociedade Empresária Limitada</p>
          <p className="text-sm"><strong>Situação Cadastral:</strong> Ativa</p>
          <p className="text-sm"><strong>Tipo:</strong> Matriz</p>
          <p className="text-sm"><strong>Capital Social:</strong> R$ 20.000,00</p>
          <p className="text-sm"><strong>Endereço:</strong> Setor SGCV Lt 15, S/N, Bloco C Sala 314, Guará, Brasília-DF</p>
          <p className="text-sm"><strong>CEP:</strong> 71215-650</p>
          <p className="text-sm"><strong>E-mail:</strong> contato@corssar.com</p>
          <p className="text-sm"><strong>Telefone/WhatsApp:</strong> (31) 973198749</p>
          <p className="text-sm italic mt-4">Transformando negócios através do marketing digital desde 2018</p>

          <h4 className="text-lg font-bold mt-8 mb-2">POLÍTICA DE PRIVACIDADE</h4>
          <p className="text-sm"><strong>Agencia Ve Marketing Digital LTDA</strong></p>
          <p className="text-sm"><strong>CNPJ:</strong> 30.065.273/0001-85</p>
          <p className="text-sm"><strong>Endereço:</strong> Setor SGCV Lt 15, S/N, Bloco C Sala 314, Guará, Brasília-DF, CEP 71215-650</p>

          <h5 className="text-md font-bold mt-4 mb-2">1. Finalidade</h5>
          <p className="text-sm">Esta política descreve como coletamos, utilizamos e protegemos os dados pessoais dos clientes que interagem conosco por meio de WhatsApp, e-mail, telefone, redes sociais ou durante reuniões presenciais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">2. Dados Coletados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Informações fornecidas voluntariamente:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Nome, telefone, e-mail, endereço (para orçamentos ou prestação de serviços).</li>
                <li>Informações sobre o negócio do cliente e objetivos de marketing.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Dados automáticos:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Registro de interações para atendimento e melhoria de serviços.</li>
                <li>Dados de navegação (se aplicável a site ou redes sociais).</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">3. Uso de WhatsApp, Telefone e E-mail</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Finalidades:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Atendimento ao cliente, orçamentos, agendamento de reuniões e acompanhamento de projetos.</li>
                <li>Não enviamos mensagens promocionais não solicitadas sem consentimento.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Armazenamento:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Dados de contato e interações são armazenados por <strong className="font-bold">12 meses</strong>, exceto quando exigido por lei.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">4. Compartilhamento de Dados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Não comercializamos ou compartilhamos dados com terceiros para fins publicitários.</li>
            <li><strong className="font-bold">Exceções:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Parceiros de tecnologia (apenas informações necessárias para prestação de serviços).</li>
                <li>Autoridades legais, mediante requisição formal.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">5. Direitos do Usuário (LGPD)</h5>
          <p className="text-sm">Você pode solicitar:</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Acesso ou correção dos seus dados.</li>
            <li>Exclusão (exceto quando a lei exigir retenção).</li>
            <li>Revogação de consentimento (via e-mail ou telefone).</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">6. Segurança</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Dados protegidos com acesso restrito à equipe autorizada.</li>
            <li>Não solicitamos informações sensíveis (como CPF ou cartões de crédito) por mensagens não criptografadas.</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">7. Alterações nesta Política</h5>
          <p className="text-sm">Atualizações serão comunicadas em nossos canais oficiais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">8. Contato</h5>
          <p className="text-sm">Dúvidas ou solicitações sobre seus dados?</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">WhatsApp:</strong> (31) 973198749</li>
            <li><strong className="font-bold">E-mail:</strong> contato@corssar.com</li>
          </ul>
          <p className="text-sm mt-4">© 2024 Agência Ve Marketing Digital. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
