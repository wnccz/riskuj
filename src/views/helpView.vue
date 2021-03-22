<template>
    <div class="container">
      <navbar appname="Skautské riskuj"></navbar>
      <div class="row">
          <div class="col-lg-9">
              <div class="card">
                  <div class="card-header">Nápověda</div>
                  <div class="card-body">
                      <h3>O projektu</h3>
                      <p>Projekt <strong>skautské riskuj</strong> vznikl jako podpora pro oddíly v době distanční skautské činnosti. Je určen pro zábavné hraní vědomostního kvízu 
                      známého z televizní soutěže a to během online setkáních na libovolné platformě (Google Meets, Microsoft Teams, Skype, Zoom...). Nicméně je možné ho využít 
                      i při hraní prezenčně (s použitím velké obrazovky nebo projektoru).</p>
                      <h3>Příprava otázek</h3>
                      <p>Otázky je možné upravit pomocí intuitivního Editoru. Otázky se ukládají do paměti prohlížeče, není tedy možné si zaregistrovat uživatelský profil
                         a otázky ukládat na server. Otázky jsou potom dostupné v prohlížečí i po jeho zavření a znovu otevření.  Chcete-li připravené otázky zálohovat, nebo 
                         přenést mezi různými prohlížeči, či počítači, případně je sdílet v týmu, je možné stáhnout sadu otázek do souboru. Tento soubor potom můžete zálohovat či 
                         sdílet s ostatními a otázky z něj pak můžete kdykoliv nahrát.</p>
                      <h3>Příprava hry</h3>
                      <ul>
                          <li>V editoru si připrav témata a otázky</li>
                          <li>V panelu přidej hráče, kteří budou hrát (lze měnit i v průběhu hry)</li>
                          <li>Kliknutím na záložku Projekce se otevře nová karta prohlížeče ve verzi pro promítání a sdílení</li>
                          <li>Na tvé oblíbené videokonfereční platformě nasdílej <strong>kartu s prezentací</strong> (nesdílej ovládací panel - hráči by viděli správné odpovědi)</li>
                          <li>Můžete začít hrát</li>
                      </ul>
                      <h3>Průběh hry</h3>
                      <ul>
                          <li>Zvol hráče, který bude začínat s výběrem otázek</li>
                          <li>Hráč ústně sdělí otázku, kterou vybral (téma a bodovou hodnotu)</li>
                          <li>Klikni na vybranou otázku ve svém panelu. Zadání otázky vidí jak vedoucí hry, tak i účastnici v prezentaci.</li>
                          <li>Přečti otázku. Po přečtení se hráči mohou přihlásit k odpovědi pomocí funkce <strong>Hlášení o slovo</strong> na videokonferenční platformě.</li>
                          <li>Videokonfereční platformy zpravidla zobrazují přihlášené posluchače v pořadí v jakém se přihlásili, takže snadno poznáš, kdo se přihlásil první.</li>
                          <li>Ve svém panelu klikni na jméno hráče, který se přihlásil první. V projekci bude jeho jméno zvýrazněno.</li>
                          <li>Vyzvi hráče k odpovědi a označ, zda odpověděl správně či špatně. Jeho odpověď pak můžeš doplnit či přidat zajímavost.</li>
                          <li>Pokud se nepřihlásil nikdo, pokračuj tlačítkem Nikdo neví</li>
                          <li>Požádej všechny hráče, aby se přestali hlásit, případně to udělejte za ně.</li>
                          <li>Vyzvi hráče, který naposledy odpověděl správně, aby vybral další otázku.</li>
                      </ul>
                      <h3>Režim úprav</h3>
                      <p>Odebrání hráče v průběhu hry mu nevratně smaže všechny body. Menu pro mazání hráčů jsem proto skryl do režimu úprav. Stejně jako volbu pro reset celé hry. 
                         Tyto skryté funkce je možné aktivovat kliknutím na ozubené kolo v pravém horním rohu.
                      </p>
                      <h3>Co nefunguje oproti televizní verzi</h3>
                      <p>Oproti televizní verzi nefungují takzvané bonusové cihličky (body dostane hráč, který vybírá otázku zdarma - bez otázky) a dále potom premiové otázky.</p>
                      <h3>Tip pro pokročilé</h3>
                      <p>Soubor s uloženými otázkami je ve formátu JSON. Pokud jsi technicky zdatnější, můžeš si otázky upravovat přímo v něm. Díky tomu si můžeš i přizpůsobit počet 
                          témat či počet otázek v tématu. Jen si dej pozor, abys neporušil syntax a a by definovaný počet otázek odpovídal počtu témat a bodových hodnot.</p>
                      <h3>Credits</h3>
                      Pro skautské oddíly a družiny vyrobil <a href="mailto:wanacu@skaut.cz">Vojtěch Brzek - Wanaču</a>. Použité knihovny: <a href="https://vuejs.org">Vue.js</a>, 
                      <a href="https://getbootstrap.com/">Bootstrap</a>.
                  </div>
              </div>
              
          </div>
      </div>
    </div>
</template>


<script>
  import Navbar from '../components/navbar.vue';
  
  export default ({
      components: { Navbar },
  })
</script>