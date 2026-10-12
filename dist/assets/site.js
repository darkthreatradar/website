const translations={
  pt:{
    "nav.platform":"Plataforma","nav.workflow":"Fluxo CTI","nav.deploy":"Instalação",
    "hero.eyebrow":"CÓDIGO ABERTO // CTI AUTÔNOMA","hero.title":"Transforme dados públicos de ameaças em inteligência operacional.","hero.lede":"O Dark Threat Radar coleta, normaliza e correlaciona continuamente vulnerabilidades, infraestrutura maliciosa, exposição a ransomware e alertas de segurança — em um único ambiente pronto para analistas.","hero.install":"Instalar com Docker","hero.demo":"Explorar a plataforma",
    "stats.connectors":"CONECTORES PÚBLICOS","stats.cycle":"INGESTÃO PRINCIPAL","stats.license":"CÓDIGO ABERTO",
    "platform.label":"A PLATAFORMA","platform.title":"Feito para destacar sinais, não ruído.","platform.copy":"Cada camada reduz a troca de contexto: coleta consciente da fonte, dados normalizados, correlação e uma interface única para investigação.",
    "cards.correlation.title":"Correlação multifonte","cards.correlation.copy":"Normalize e elimine duplicidades preservando cada provedor e sinal de confiança.","cards.exposure.title":"Inteligência de exposição","cards.exposure.copy":"Acompanhe extorsões e vazamentos em fontes públicas independentes, não apenas rótulos de ransomware.","cards.remediation.title":"Remediação oficial","cards.remediation.copy":"Conecte CVEs, CISA KEV, EPSS e alertas dos fabricantes às tecnologias que sua equipe realmente utiliza.","cards.visibility.title":"Visibilidade operacional","cards.visibility.copy":"Veja saúde dos conectores, sincronização, erros e caminhos de coleta sem sair do painel.",
    "workflow.label":"CICLO DE INTELIGÊNCIA","workflow.title":"Da coleta à ação do analista.","workflow.copy":"O Dark Threat Radar implementa as etapas essenciais do ciclo de CTI como um pipeline contínuo e observável.",
    "pipeline.collect":"Coletar","pipeline.collectCopy":"Feeds públicos e fontes comunitárias autenticadas","pipeline.normalize":"Normalizar","pipeline.normalizeCopy":"Entidades, horários e identificadores consistentes","pipeline.correlate":"Correlacionar","pipeline.correlateCopy":"Observações independentes tornam a evidência mais forte","pipeline.analyze":"Analisar","pipeline.analyzeCopy":"Confiança, severidade e relevância para a organização","pipeline.act":"Agir","pipeline.actCopy":"Alertas, investigação e orientação de remediação",
    "topology.title":"Saiba exatamente de onde vem a sua inteligência.","topology.note":"A saúde animada das fontes torna a ingestão observável. A plataforma integra atualmente 27 conectores públicos de CTI nas categorias de vulnerabilidades, malware, rede, ransomware, notícias e conhecimento de ameaças.",
    "watchlist.title":"Suas organizações, domínios e tecnologias — monitorados continuamente.","watchlist.copy":"A Watchlist transforma o fluxo global em um ambiente focado. Monitore clientes, marcas, domínios, países, fabricantes, produtos e CVEs específicos.","watchlist.f1t":"Um alerta por incidente","watchlist.f1c":"Observações independentes são correlacionadas, em vez de duplicadas.","watchlist.f2t":"Confiança por confirmação","watchlist.f2c":"Duas ou mais fontes fortalecem a mesma descoberta.","watchlist.f3t":"Status operacional visual","watchlist.f3c":"As colmeias destacam estados monitorados, de atenção e críticos.",
    "source.title":"Uma coleta que você pode inspecionar, não apenas confiar.","source.copy":"Cada conector informa sua condição, última sincronização e erros. A topologia animada mostra todo o caminho de ingestão diretamente no dashboard.",
    "deploy.title":"Controle o motor. Controle os dados.","deploy.copy":"Execute o Dark Threat Radar na sua infraestrutura com Docker Compose ou Linux nativo. Os dados de ameaças e credenciais protegidas permanecem sob seu controle.",
    "cta.title":"Construa uma visão mais clara das ameaças.","cta.copy":"Comece pela edição de código aberto, conheça a arquitetura e instale em seu próprio ambiente.","cta.github":"Ver projeto no GitHub","cta.contact":"Contato","footer.copy":"Inteligência Autônoma de Ameaças Cibernéticas. Código aberto sob a licença MIT."
  }
};

const originals=new Map();
document.querySelectorAll("[data-i18n]").forEach(el=>originals.set(el.dataset.i18n,el.textContent));
const switcher=document.querySelector(".lang-switch");
let language="en";
switcher?.addEventListener("click",()=>{
  language=language==="en"?"pt":"en";
  document.documentElement.lang=language==="pt"?"pt-BR":"en";
  document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;el.textContent=language==="pt"?(translations.pt[key]||originals.get(key)):originals.get(key)});
  switcher.querySelectorAll("span").forEach(span=>span.classList.toggle("active",span.textContent.toLowerCase()===language));
});

document.querySelector(".copy-command")?.addEventListener("click",async event=>{
  try{await navigator.clipboard.writeText(event.currentTarget.dataset.copy);event.currentTarget.textContent="COPIED";setTimeout(()=>event.currentTarget.textContent="COPY",1400)}catch{event.currentTarget.textContent="SELECT"}
});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".capability-card,.pipeline article,.showcase-image,.source-image").forEach(el=>observer.observe(el));
