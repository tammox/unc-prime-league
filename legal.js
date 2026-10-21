/* UNC Planer – Impressum und Datenschutzerklärung (DEU / ENG)
 *
 * >>> HIER DEINE ANGABEN EINTRAGEN <<<  (alles in eckigen Klammern ersetzen)
 * Die Texte sind eine Vorlage für ein privates, nicht-kommerzielles Projekt und keine Rechtsberatung.
 * Ändert sich etwas (anderes Hosting, neue externe Dienste, Verkauf an andere Teams), bitte anpassen.
 */
window.LEGAL_CONFIG = {
  name:    "Tammo",
  street:  "",      // leer lassen = wird nicht angezeigt (siehe Hinweis in der Antwort zur Anschrift)
  city:    "",
  country: "",
  email:   "",                      // optional – leer lassen, wenn du keine E-Mail angeben willst
  discord: "meinbenutzernameisttammo",    // z. B. "name" oder "name#1234"; leer lassen = wird nicht angezeigt
  hosting: "GitHub Pages",
  showImpressum: false,   // true = Impressum-Seite wieder aktivieren (dann auch den Link im Footer in index.html ergänzen)
  updated: "Oktober 2026"
};

(function(){
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const C = () => window.LEGAL_CONFIG;
  const TAG = () => esc((window.__teamTag && window.__teamTag()) || "UNC");
  const addr = () => [C().name, C().street, C().city, C().country].filter(x => String(x || "").trim()).map(esc).join("<br>");
  const mail = () => '<a href="mailto:' + esc(C().email) + '">' + esc(C().email) + '</a>';
  // Kontakt: E-Mail und/oder Discord, je nachdem was eingetragen ist
  const contact = lang => {
    const parts = [];
    if (String(C().email || "").trim()) parts.push((lang === "en" ? "Email: " : "E-Mail: ") + mail());
    if (String(C().discord || "").trim()) parts.push("Discord: " + esc(C().discord));
    return parts.join("<br>");
  };

  const DE = {
    impressum: {
      title: "Impressum",
      html: () =>
        '<h3>Angaben gemäß § 5 DDG</h3><p>' + addr() + '</p>' +
        '<h3>Kontakt</h3><p>' + contact('de') + '</p>' +
        '<h3>Art des Angebots</h3><p>Der ' + TAG() + ' Planer ist ein privates, nicht-kommerzielles Planungswerkzeug für ein Prime-League-Team. Er dient der Abstimmung von Spielterminen, der Draft-Vorbereitung und der Organisation des Teams.</p>' +
        '<h3>Haftung für Inhalte und Links</h3><p>Die Inhalte wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität kann jedoch keine Gewähr übernommen werden. Für Inhalte externer Seiten, auf die verwiesen wird (z. B. OP.GG, Prime League), sind ausschließlich deren Betreiber verantwortlich.</p>' +
        '<h3>Hinweis zu Riot Games</h3><p>Dieses Projekt wird von Riot Games weder unterstützt noch gefördert und spiegelt nicht die Ansichten oder Meinungen von Riot Games oder von Personen wider, die offiziell an der Produktion oder Verwaltung von Riot-Games-Eigentum beteiligt sind. League of Legends und Riot Games sind Marken oder eingetragene Marken von Riot Games, Inc. Prime League und OP.GG sind Marken ihrer jeweiligen Inhaber.</p>'
    },
    datenschutz: {
      title: "Datenschutzerklärung",
      html: () =>
        '<h3>1. Verantwortlicher</h3><p>' + addr() + '<br>' + contact('de') + '</p>' +
        '<h3>2. Worum es geht</h3><p>Der ' + TAG() + ' Planer ist ein Planungswerkzeug für ein Team. Diese Erklärung beschreibt, welche personenbezogenen Daten dabei verarbeitet werden.</p>' +
        '<h3>3. Hosting</h3><p>Die Seite wird bei folgendem Anbieter bereitgestellt: ' + esc(C().hosting) + '. Beim Aufruf verarbeitet der Anbieter technisch notwendige Verbindungsdaten (z. B. IP-Adresse, Zeitpunkt, abgerufene Datei) in Server-Logs. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (sicherer und stabiler Betrieb).</p>' +
        '<h3>4. Datenbank (Google Firebase)</h3><p>Die Teamdaten werden in Google Firebase (Cloud Firestore) gespeichert, einem Dienst der Google Ireland Limited bzw. Google LLC (USA). Gespeichert werden die vom Team eingegebenen Inhalte: Spielernamen, Profilbilder, Rollen, Zu- und Absagen mit Notizen, Terminvorschläge, Gegnernamen, Links zu OP.GG- und Prime-League-Profilen, Drafts sowie die Einstellungen der Discord-Benachrichtigung. Für den Zugriff wird eine anonyme Firebase-Anmeldung genutzt; dabei entsteht eine zufällige technische Kennung. Eine Übermittlung in die USA stützt sich auf die Standardvertragsklauseln bzw. das EU-US Data Privacy Framework. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Organisation des Teams).</p>' +
        '<h3>5. Speicherung im Browser</h3><p>Die Seite speichert im Browser (localStorage) ausschließlich technisch notwendige Einstellungen: die gewählte Person, die Spracheinstellung, die Sound-Einstellung und welche Terminvorschläge aufgeklappt sind. Diese Daten verlassen den Browser nicht. Es werden keine Tracking- oder Analyse-Cookies eingesetzt.</p>' +
        '<h3>6. Externe Inhalte</h3><p>Zur Darstellung werden Bilder von folgenden Anbietern geladen. Dabei wird deine IP-Adresse an diese übermittelt: Riot Games (ddragon.leagueoflegends.com, Champion-Bilder), Fandom/LoL-Wiki (wiki.leagueoflegends.com, Rollen-Symbol), Community Dragon (raw.communitydragon.org, Rang-Symbole) und 7TV (cdn.7tv.app, Seiten-Symbol). Schriftarten werden lokal ausgeliefert, es findet kein Abruf bei Google Fonts statt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>' +
        '<h3>7. Discord-Benachrichtigungen</h3><p>Ist ein Discord-Webhook hinterlegt, werden bei neuen Matches, Terminvorschlägen und Ergebnissen Nachrichten an den Discord-Kanal des Teams gesendet (Discord Inc., USA). Die Nachrichten enthalten Spieltag, Gegner, Termin und gegebenenfalls den Namen der vorschlagenden Person.</p>' +
        '<h3>8. Speicherdauer</h3><p>Teamdaten bleiben gespeichert, bis sie im Planer gelöscht werden. Server-Logs beim Hosting-Anbieter werden nach dessen üblichen Fristen gelöscht.</p>' +
        '<h3>9. Deine Rechte</h3><p>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO). Wende dich dafür an die oben genannte Kontaktmöglichkeit. Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.</p>' +
        '<p class="legal-stand">Stand: ' + esc(C().updated) + '</p>'
    }
  };

  const EN = {
    impressum: {
      title: "Legal notice",
      html: () =>
        '<h3>Information pursuant to § 5 DDG (Germany)</h3><p>' + addr() + '</p>' +
        '<h3>Contact</h3><p>' + contact('en') + '</p>' +
        '<h3>Nature of this service</h3><p>' + TAG() + ' Planer is a private, non-commercial planning tool for a Prime League team. It is used to coordinate match dates, prepare drafts and organise the team.</p>' +
        '<h3>Liability for content and links</h3><p>The content was created with care, but no guarantee can be given for its accuracy, completeness or timeliness. The operators of external sites that are linked (e.g. OP.GG, Prime League) are solely responsible for their content.</p>' +
        '<h3>Note on Riot Games</h3><p>This project is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. Prime League and OP.GG are trademarks of their respective owners.</p>'
    },
    datenschutz: {
      title: "Privacy policy",
      html: () =>
        '<h3>1. Controller</h3><p>' + addr() + '<br>' + contact('en') + '</p>' +
        '<h3>2. What this is about</h3><p>' + TAG() + ' Planer is a planning tool for a team. This policy describes which personal data is processed in the process.</p>' +
        '<h3>3. Hosting</h3><p>This site is provided by: ' + esc(C().hosting) + '. When you visit it, the provider processes technically necessary connection data (e.g. IP address, time, requested file) in server logs. Legal basis: Art. 6(1)(f) GDPR (secure and stable operation).</p>' +
        '<h3>4. Database (Google Firebase)</h3><p>Team data is stored in Google Firebase (Cloud Firestore), a service of Google Ireland Limited and Google LLC (USA). The stored data is what the team enters: player names, profile pictures, roles, availability with notes, date proposals, opponent names, links to OP.GG and Prime League profiles, drafts, and the Discord notification settings. Access uses an anonymous Firebase sign-in, which creates a random technical identifier. Transfers to the USA rely on standard contractual clauses or the EU-US Data Privacy Framework. Legal basis: Art. 6(1)(f) GDPR (organising the team).</p>' +
        '<h3>5. Storage in your browser</h3><p>The site only stores technically necessary settings in your browser (localStorage): the selected person, the language, the sound setting and which date proposals are expanded. This data does not leave your browser. No tracking or analytics cookies are used.</p>' +
        '<h3>6. External content</h3><p>To display the site, images are loaded from the following providers, which receive your IP address in the process: Riot Games (ddragon.leagueoflegends.com, champion images), Fandom/LoL Wiki (wiki.leagueoflegends.com, role icon), Community Dragon (raw.communitydragon.org, rank icons) and 7TV (cdn.7tv.app, site icon). Fonts are served locally; nothing is loaded from Google Fonts. Legal basis: Art. 6(1)(f) GDPR.</p>' +
        '<h3>7. Discord notifications</h3><p>If a Discord webhook is configured, messages about new matches, date proposals and results are sent to the team\'s Discord channel (Discord Inc., USA). They contain the matchday, opponent, date and, where applicable, the name of the person who proposed a date.</p>' +
        '<h3>8. Retention</h3><p>Team data stays stored until it is deleted in the planner. Server logs at the hosting provider are deleted according to its usual periods.</p>' +
        '<h3>9. Your rights</h3><p>You have the right of access, rectification, erasure, restriction of processing, data portability and objection (Art. 15–21 GDPR). Please use the contact details above. You also have the right to lodge a complaint with a data protection supervisory authority.</p>' +
        '<p class="legal-stand">Last updated: ' + esc(C().updated) + '</p>'
    }
  };

  window.LEGAL_PAGES = function(kind, lang){
    const set = lang === "en" ? EN : DE;
    if (kind === "impressum" && !C().showImpressum) return null;
    const p = set[kind];
    return p ? { title: p.title, html: p.html() } : null;
  };
})();
