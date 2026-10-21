/* UNC Planer – Sprachumschaltung DEU / ENG
 *
 * Die App ist auf Deutsch geschrieben. Für ENG werden alle sichtbaren Texte (Textknoten sowie die Attribute
 * title / placeholder / aria-label / alt) anhand dieses Wörterbuchs übersetzt – sofort nach jedem Neuzeichnen.
 *   EXACT:     ganzer Text  ->  Übersetzung
 *   TEMPLATES: Texte mit variablen Teilen, {} steht für beliebigen Text, {1} {2} … in der Übersetzung
 * Gamer-Begriffe (Draft, Scrim, Ban, Pick, Side Selection, Tierlist, Pool, Fill, Flex …) bleiben bewusst englisch.
 * Fehlt ein Text, bleibt er einfach deutsch stehen. Neue Texte also hier unten ergänzen.
 */
(function(){
  "use strict";

  const EXACT = {
    // ---- Kopfleiste / allgemein
    "Sound aus": "Sound off",
    "Sound an": "Sound on",
    "Sound an/aus": "Sound on/off",
    "Wer bist du?": "Who are you?",
    "Verwaltung": "Manage",
    "Fertig": "Done",
    "Champion-Übersicht": "Champion overview",
    "Hauptseite": "Home",
    "Tierlists": "Tierlists",
    "Sprache": "Language",
    "Spieltage": "Matchdays",
    "Abgeschlossen": "Completed",
    "Draft": "Draft",
    "Änderungen werden automatisch für das ganze Team gespeichert.": "Changes are saved automatically for the whole team.",
    "Dieses Projekt wird von Riot Games weder unterstützt noch gefördert und spiegelt nicht die Ansichten oder Meinungen von Riot Games oder von Personen wider, die offiziell an der Produktion oder Verwaltung von Riot-Games-Eigentum beteiligt sind. League of Legends und Riot Games sind Marken oder eingetragene Marken von Riot Games, Inc. Prime League und OP.GG sind Marken ihrer jeweiligen Inhaber.":
      "This project is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. Prime League and OP.GG are trademarks of their respective owners.",

    // ---- Verwaltung
    "Team & Admin": "Team & Admin",
    "Bild hochladen": "Upload image",
    "Bild entfernen": "Remove image",
    "Profilbild hochladen": "Upload profile picture",
    "Team-Logo": "Team logo",
    "Logo-Link": "Logo link",
    "Link beim Klick auf das Team-Logo": "Link opened when clicking the team logo",
    "Rollen-ID @team": "Role ID @team",
    "Rollen-ID (leer = nur Text @team ohne Ping)": "Role ID (empty = plain text @team, no ping)",
    "Neues Match": "New match",
    "Neuer Terminvorschlag": "New date proposal",
    "Ergebnis": "Result",
    "Test senden": "Send test",
    "Sende …": "Sending …",
    "Gesendet": "Sent",
    "Fehlgeschlagen": "Failed",
    "Backup": "Backup",
    "Alle Teamdaten als Datei sichern oder eine Sicherung wieder einspielen. Der Discord-Webhook ist nicht enthalten.": "Save all team data to a file or restore a backup. The Discord webhook is not included.",
    "Daten exportieren": "Export data",
    "Daten importieren": "Import data",
    "Impressum": "Legal notice",
    "Datenschutz": "Privacy",
    "Sprache der Nachrichten": "Message language",
    "Benachrichtigungen im Team-Kanal über einen Webhook.": "Notifications in the team channel via a webhook.",
    "Spieler:innen": "Players",
    "Spieler:in hinzufügen": "Add player",
    "Spieltag hinzufügen": "Add matchday",
    "Bezeichnung": "Label",
    "Testmodus: Nachrichten gehen an den Test-Discord": "Test mode: messages go to the test Discord",
    "Testmodus ist AN – der Team-Kanal bekommt gerade nichts.": "Test mode is ON – the team channel receives nothing right now.",
    "Test-Webhook": "Test webhook",
    "Test-Rollen-ID": "Test role ID",
    "Rollen-ID auf dem Test-Server": "Role ID on the test server",
    "https://discord.com/api/webhooks/… (Test-Server)": "https://discord.com/api/webhooks/… (test server)",
    "Hinzufügen": "Add",
    "Abbrechen": "Cancel",
    "Prime-League-Link (optional)": "Prime League link (optional)",
    "Discord-Ping senden": "Send Discord ping",
    "Ping senden": "Send ping",
    "Kein Discord-Webhook hinterlegt": "No Discord webhook set",
    "Bitte kurz warten (1 Minute Pause zwischen Pings)": "Please wait (1 minute between pings)",
    "Keine neuen Terminvorschläge seit dem letzten Ping": "No new date proposals since the last ping",
    "Alle neuen Terminvorschläge an Discord senden": "Send all new date proposals to Discord",
    "Neue*r Spieler*in": "New player",
    "Rolle wählen": "Select role",
    "Entfernen": "Remove",
    "Gegner": "Opponent",
    "Wir": "Us",
    "Side Selection: –": "Side Selection: –",
    "Side Selection: Wir": "Side Selection: Us",
    "Side Selection: Gegner": "Side Selection: Opponent",
    "Prime-League-Link": "Prime League link",
    "Deutsch": "Deutsch",
    "English": "English",

    // ---- Spieltag-Karten
    "Team-Seite auf Prime League öffnen": "Open team page on Prime League",
    "Match auf Prime League ansehen": "View match on Prime League",
    "Spieltag bearbeiten": "Edit matchday",
    "Gegner offen": "Opponent TBD",
    "Datum offen": "Date TBD",
    "Noch offen": "Pending",
    "(mit Sub)": "(with sub)",
    "Details anzeigen": "Show details",
    "Einklappen": "Collapse",
    "Bearbeiten": "Edit",
    "Löschen": "Delete",
    "Speichern": "Save",
    "Ergebnis (Bo3):": "Result (Bo3):",
    "Kann": "Available",
    "Unsicher": "Unsure",
    "Kann nicht": "Unavailable",
    "Noch nicht abgestimmt": "Not voted yet",
    "Notiz": "Note",
    "Notiz anzeigen": "Show note",
    "Notiz bearbeiten": "Edit note",
    "Notiz schließen": "Close note",
    "Notiz (optional, z. B. Grund)": "Note (optional, e.g. reason)",
    "Noch keine Spieltage angelegt. Über „Verwaltung“ hinzufügen.": "No matchdays yet. Add them via “Manage”.",
    "Noch keine Spieltage angelegt. Über „Verwaltung\" hinzufügen.": "No matchdays yet. Add them via “Manage”.",
    "Keine offenen Spieltage mehr.": "No open matchdays left.",
    "Noch keine Spieler:innen – über „Verwaltung“ hinzufügen": "No players yet – add them via “Manage”",
    "Noch keine Spieler:innen – über „Verwaltung\" hinzufügen": "No players yet – add them via “Manage”",

    // ---- Terminvorschläge
    "Vorschläge": "Proposals",
    "schlägt vor:": "proposes:",
    "Terminvorschlag": "Date proposal",
    "Terminvorschlag hinzufügen": "Add date proposal",
    "Terminvorschläge ausblenden": "Hide date proposals",
    "Beim Gegner-Team angefragt": "Requested from opponent team",
    "Vom Gegner angenommen": "Accepted by opponent",
    "Vom Gegner abgelehnt": "Rejected by opponent",
    "Zurückziehen": "Withdraw",
    "Dafür stimmen": "Vote yes",
    "Dagegen stimmen": "Vote no",
    "Termin": "Date",
    "Termin, z. B. 04.10. 19 Uhr": "Date, e.g. 04.10. 19:00",
    "Aufstellung": "Lineup",
    "– wählen –": "– select –",
    "Abstimmung": "Voting",
    "Status": "Status",
    "Offen": "Open",
    "Angenommen": "Accepted",
    "Abgelehnt": "Rejected",
    "Übernehmen": "Apply",
    "Als offiziellen Termin übernehmen": "Make this the official date",
    "War ursprünglich 'unsicher'": "Was originally “unsure”",
    "War ursprünglich „unsicher“": "Was originally “unsure”",

    // ---- Kalender / Zeit (Monate und Wochentage kommen sprachabhängig direkt aus app.js)
    "Zurück": "Back",
    "Weiter": "Next",
    "Heute": "Today",
    "Leeren": "Clear",

    // ---- Spielerseite / Champion-Übersicht
    "Spieler:in nicht gefunden.": "Player not found.",
    "Spieltag nicht gefunden.": "Matchday not found.",
    "Lädt…": "Loading…",
    "Lädt …": "Loading …",
    "Champion-Auswahl schließen": "Close champion selection",
    "Champion importieren": "Import champion",
    "Champion suchen …": "Search champion …",
    "Lade Champions von Data Dragon…": "Loading champions from Data Dragon…",
    "Noch keine Champions": "No champions yet",
    "Keine Treffer": "No results",
    "Keine Spieler ausgewählt.": "No players selected.",
    "Champions konnten nicht geladen werden – Internetverbindung prüfen.": "Could not load champions – check your internet connection.",
    "Champion-Daten konnten nicht geladen werden – Internetverbindung prüfen und Seite neu laden.": "Could not load champion data – check your internet connection and reload the page.",
    "Lade Champion-Daten …": "Loading champion data …",
    "Champion-Liste konnte nicht von Data Dragon geladen werden": "Champion list could not be loaded from Data Dragon",
    "Bitte Spieler:in wählen.": "Please select a player.",

    // ---- Draft: Tabs, Kopf
    "Vorbereitung": "Prep",
    "Live-Draft": "Live Draft",
    "Gegner-Scouting": "Enemy scouting",
    "Champion-Icon anklicken, um sie als Ban zu markieren (nochmal klicken: wieder abwählen).": "Click a champion icon to mark it as a ban (click again to deselect).",
    "Rang": "Rank",
    "Rang (manuell)": "Rank (manual)",
    "OP.GG-Link": "OP.GG link",
    "OP.GG-Link einfügen – Gamertag wird gelesen": "Paste OP.GG link – gamer tag is read automatically",
    "Prime-League-Profil einfügen – Name wird gelesen": "Paste Prime League profile – name is read automatically",
    "OP.GG-Profil öffnen": "Open OP.GG profile",
    "Prime-League-Profil öffnen": "Open Prime League profile",
    "Link bearbeiten": "Edit link",
    "Link nicht erkannt (erwartet: primeleague.gg/de/users/123-name)": "Link not recognised (expected: primeleague.gg/de/users/123-name)",
    "Link nicht erkannt (erwartet z. B. op.gg/…/summoners/euw/Name-TAG)": "Link not recognised (expected e.g. op.gg/…/summoners/euw/Name-TAG)",
    "Champion": "Champion",
    "Priorität: oft gespielte Champions": "Priority: frequently played champions",
    "Weitere gespielte Champions": "Other played champions",
    "Aus dem Pool entfernen": "Remove from pool",
    "Ban-Kandidaten": "Ban candidates",
    "anklicken: als eine der 3 ersten Bans markieren.": "click: mark as one of the first 3 bans.",
    "Als eine der 3 ersten Bans markieren": "Mark as one of the first 3 bans",
    "Freigeben": "Release",
    "Noch keine Kandidaten – oben im Scouting einen Gegner-Champion anklicken oder „+ Champion“ nutzen.": "No candidates yet – click an enemy champion in the scouting above or use “+ Champion”.",
    "Bans aus vorherigen Spielen": "Bans from previous games",
    "Bereits gepickt (Fearless)": "Already picked (Fearless)",
    "Aufstellung & Pick-Plan": "Lineup & pick plan",
    "gebannt": "banned",
    "= gebannt bzw. auf der Ban-Liste": "= banned or on the ban list",
    "Teamüberschneidung": "Team overlap",
    "= Teamüberschneidung: Gegner spielt ihn auch": "= team overlap: opponent plays them too",
    "Plan:": "Plan:",
    "Steht auf der Ban-Vorschlagsliste (noch nicht eingelockt)": "On the ban suggestion list (not locked in yet)",
    "Comp-Check (Erstwahl je Rolle)": "Comp check (first choice per role)",
    "Keine Auffälligkeiten.": "Nothing unusual.",
    "Wenig Frontline (kein Tank/Fighter).": "Little frontline (no tank/fighter).",
    "Fast nur physischer Schaden – Gegner kann Rüstung stapeln.": "Almost only physical damage – the opponent can stack armor.",
    "Fast nur magischer Schaden – Gegner kann Magieresistenz stapeln.": "Almost only magic damage – the opponent can stack magic resist.",
    "Champion wählen": "Select champion",
    "Ban-Kandidat hinzufügen": "Add ban candidate",
    "Du kannst mehrere Champions nacheinander anklicken. Zum Beenden auf das Kreuz oder neben das Fenster klicken.": "You can click several champions in a row. Click the cross or outside the window to finish.",
    "schon im Pool": "already in the pool",
    "steht schon auf der Ban-Liste": "already on the ban list",
    "schon gewählt": "already selected",
    "in diesem Spiel bereits gebannt": "already banned in this game",
    "in diesem Spiel bereits gepickt": "already picked in this game",
    "Flex": "Flex",

    // ---- Live-Draft
    "Alle Spieler": "All players",
    "Spiel zurücksetzen": "Reset game",
    "Schritt zurück": "Undo step",
    "Gelockte Bans übernehmen": "Apply locked bans",
    "Trägt die in der Vorbereitung eingelockten Bans in leere Ban-Felder unserer Seite ein": "Fills empty ban slots on our side with the bans locked in during prep",
    "Draft abgeschlossen": "Draft completed",
    "Abschluss zurücknehmen": "Reopen draft",
    "Alle Schritte belegt": "All steps filled",
    "Mit „Draft abgeschlossen“ bestätigen": "Confirm with “Draft completed”",
    "Kein Ban": "No ban",
    "kein Ban": "no ban",
    "offen": "open",
    "Aus der Vorbereitung übernommen": "Taken over from prep",
    "Pick-Phase 2 folgt nach Ban-Phase 2": "Pick phase 2 follows after ban phase 2",
    "Ban-Phase 2 folgt nach den ersten 6 Picks": "Ban phase 2 follows after the first 6 picks",
    "Ban-Phase 1 (3 pro Seite)": "Ban phase 1 (3 per side)",
    "Pick-Phase 1": "Pick phase 1",
    "Ban-Phase 2 (2 pro Seite)": "Ban phase 2 (2 per side)",
    "Pick-Phase 2 (Red hat Last Pick)": "Pick phase 2 (Red has last pick)",
    "Bans": "Bans",
    "Vorschläge für den aktuellen Schritt": "Suggestions for the current step",
    "Wähle oben unsere Seite (Blue/Red) für dieses Spiel, dann gibt es passende Vorschläge.": "Choose our side (Blue/Red) above for this game to get matching suggestions.",
    "Draft abgeschlossen. Ein Klick auf ein Feld springt dorthin, um Einträge zu korrigieren.": "Draft completed. Click a slot to jump to it and correct entries.",
    "Unser Ban – eingelockte Bans zuerst, dann weitere Vorschläge": "Our ban – locked-in bans first, then further suggestions",
    "Als Ban bestätigen": "Confirm as ban",
    "Keine (verfügbaren) Ban-Kandidaten – in der Vorbereitung welche hinzufügen oder in der Liste frei wählen.": "No (available) ban candidates – add some in prep or pick freely from the list.",
    "Unser Pick – Plan & Tierlist der noch offenen Rollen": "Our pick – plan & tierlist of the remaining roles",
    "Last Pick: ihr könnt auf alles reagieren": "Last pick: you can react to everything",
    "Alle Rollen sind vergeben.": "All roles are taken.",
    "Keine verfügbaren Champions im Plan/in der Tierlist.": "No available champions in the plan/tierlist.",
    "Gegner bannt – unsere Erstwahl-Champions (Ban-Risiko)": "Opponent bans – our first-choice champions (ban risk)",
    "Noch kein Plan hinterlegt.": "No plan saved yet.",
    "Gegner pickt – mögliche Champions aus dem Scouting": "Opponent picks – possible champions from scouting",
    "Keine Gegner-Champions im Scouting hinterlegt (oder alle schon vergeben).": "No enemy champions in scouting (or all already taken).",
    "Blue · First Pick": "Blue · First Pick",
    "Red · Last Pick": "Red · Last Pick",
    "· First Pick": "· First Pick",
    "· Last Pick": "· Last Pick",

    // ---- Dialoge
    "Speichern fehlgeschlagen": "Saving failed",
    "Speichern hat nicht geklappt. Prüfe die Internetverbindung bzw. die Firebase-Konfiguration.": "Saving did not work. Check your internet connection or the Firebase configuration.",
    "Bitte oben zuerst auswählen, wer du bist.": "Please select who you are at the top first.",
    "Nur die Person, die den Vorschlag gemacht hat, kann ihn zurückziehen.": "Only the person who made the proposal can withdraw it.",
    "Für die Übernahme wird das Format dd.mm. hh:mm benötigt (mit Uhrzeit). Bitte den Vorschlagstext entsprechend anpassen und nochmal versuchen.": "To apply a proposal, the format dd.mm. hh:mm (with time) is required. Please adjust the proposal text and try again.",
    "Bild konnte nicht gelesen werden": "Image could not be read",
    "Das Bild konnte nicht verarbeitet werden.": "The image could not be processed.",
    "Spieler:in entfernen?": "Remove player?",
    "Spieltag entfernen?": "Remove matchday?",
    "Diesen Termin als offiziellen Spieltag-Termin übernehmen? Der bisherige Termin wird dafür zu einem neuen Terminvorschlag.": "Make this the official matchday date? The current date will become a new date proposal.",
    "Kein gültiges Bo3-Ergebnis. Ein Team muss 2 Siege haben, das andere 0 oder 1 (z. B. 2:1 oder 0:2; bei Scrims zusätzlich 1:1).": "Not a valid Bo3 result. One team needs 2 wins, the other 0 or 1 (e.g. 2:1 or 0:2; for scrims also 1:1).",
    "Ergebnis wirklich löschen?": "Really delete the result?",
    "Firebase ist noch nicht konfiguriert. Trage im HTML-Quelltext oben im <script> deine FIREBASE_CONFIG ein, damit Änderungen für alle gespeichert werden. Bis dahin läuft die Seite nur lokal in diesem Browser-Tab.": "Firebase is not configured yet. Enter your FIREBASE_CONFIG in the <script> at the top of the HTML source so changes are saved for everyone. Until then the page only runs locally in this browser tab.",
    "Anmeldung bei Firebase fehlgeschlagen. Ist \"Anonymous\" unter Authentication → Sign-in method aktiviert?": "Firebase sign-in failed. Is “Anonymous” enabled under Authentication → Sign-in method?",

    // ---- Discord-Nachrichten
    "Jemand": "Someone",
    "Test": "Test",
    "unentschieden": "draw",
    "gewonnen": "won",
    "verloren": "lost",
    "Uhr": "",

    // ---- Multi-Suche (OP.GG)
    "OP.GG Multi-Suche": "OP.GG multi search",
    "Niemand in der Aufstellung dieses Spieltags hat einen OP.GG-Link (unter „Verwaltung“ bei den Spielern eintragen)": "Nobody in this matchday's lineup has an OP.GG link (add them under “Manage” for the players)",
    "Im Scouting unten OP.GG-Links der Gegner eintragen": "Enter the opponents' OP.GG links in the scouting below"
  };

  // {} = beliebiger Text (nicht gierig); in der Übersetzung {1}, {2} … in der Reihenfolge der {}.
  const TEMPLATES = [
    ["OP.GG-Profil von {}", "OP.GG profile of {}"],
    ["Gebannt – als Ban {} eingelockt", "Banned – locked in as ban {1}"],
    ["Teamüberschneidung – Gegner spielt ihn auch: {}", "Team overlap – opponent plays them too: {1}"],
    ["Gegner-Champion: {}", "Enemy champion: {1}"],
    ["Trifft auch uns: {}", "Also affects us: {1}"],
    ["· Spiel {n}", "· Game {1}"],
    ["{n}. Wahl", "Choice #{1}"],
    ["Spieler {n}", "Player {1}"],
    ["Spieltag {n}", "Matchday {1}"],
    ["Spiel {n}", "Game {1}"],
    ["Neues Match: {}", "New match: {1}"],
    ["Neue Terminvorschläge: {}", "New date proposals: {1}"],
    ["Neuer Termin: {}", "New date: {1}"],
    ["Ping senden ({})", "Send ping ({1})"],
    ["Ergebnis: {}", "Result: {1}"],
    ["{} (Admin)", "{1} (Admin)"],
    ["{} gewonnen", "{1} won"],
    ["{} verloren", "{1} lost"],
    ["{} unentschieden", "{1} draw"],
    ["{} Terminvorschläge anzeigen", "Show {1} date proposals"],
    ["{} schlägt vor:", "{1} proposes:"],
    ["{} schlägt für **{}** vor:\n**{}**\n(bisher: {})", "{1} proposes a new date for **{2}**:\n**{3}**\n(currently: {4})"],
    ["{} - Side Selection: {}", "{1} - Side Selection: {2}"],
    ["{} · Side Selection: {}", "{1} · Side Selection: {2}"],
    ["- Side Selection: {}", "- Side Selection: {1}"],
    ["- {t} Uhr", "- {1}"],
    ["{t} Uhr", "{1}"],
    ["Spiel {n} wirklich zurücksetzen?", "Really reset game {1}?"],
    ["Unsere Seite (Spiel {n}):", "Our side (Game {1}):"],
    ["Jetzt: {}", "Now: {1}"],
    ["Noch keine Tierlist bei {} – in der Champion-Übersicht anlegen.", "No tierlist for {1} yet – create one in the champion overview."],
    ["{} – klicken: Ban-Vorschlag wieder abwählen", "{1} – click: deselect ban suggestion"],
    ["{} – klicken: als Ban-Kandidat vorschlagen", "{1} – click: suggest as ban candidate"],
    ["{} – steht bei den Bans aus vorherigen Spielen", "{1} – is among the bans from previous games"],
    ["{} – als Ban {} eingelockt (in der Ban-Liste freigeben zum Entfernen)", "{1} – locked in as ban {2} (release it in the ban list to remove)"],
    ["{} – schon im Pool", "{1} – already in the pool"],
    ["{} – schon gewählt", "{1} – already selected"],
    ["{} – in Spiel {} gepickt – für die Serie gesperrt", "{1} – picked in game {2} – locked for the series"],
    ["in Spiel {} gepickt – für die Serie gesperrt", "picked in game {1} – locked for the series"],
    ["{} – steht schon auf der Ban-Liste", "{1} – already on the ban list"],
    ["{} – in diesem Spiel bereits gebannt", "{1} – already banned in this game"],
    ["{} – in diesem Spiel bereits gepickt", "{1} – already picked in this game"],
    ["{} (Erstwahl {})", "{1} (first choice {2})"],
    ["Ban {}: {}", "Ban {1}: {2}"],
    ["Ban {} (Ban-Phase 2)", "Ban {1} (ban phase 2)"],
    ["Ban {}: kein Ban", "Ban {1}: no ban"],
    ["Ban {} (Ban-Phase 2)", "Ban {1} (ban phase 2)"],
    ["Ban {}: {} – {}", "Ban {1}: {2} – {3}"],
    ["{} · Ban {}", "{1} · Ban {2}"],
    ["Erst {} von 5 Rollen mit Erstwahl geplant.", "Only {1} of 5 roles have a first choice planned."],
    ["Schaden grob: {}% physisch / {}% magisch (Schätzung aus Riot-Kennwerten)", "Rough damage: {1}% physical / {2}% magic (estimated from Riot stats)"],
    ["{}-Multi-Link: der Aufstellung dieses Spieltags ist noch niemand zugeordnet.", "{1} multi link: nobody is assigned to this matchday's lineup yet."],
    ["{}-Multi-Link: {} von {} Spielern in der Aufstellung – ohne OP.GG-Link: {} (in der Verwaltung eintragen).", "{1} multi link: {2} of {3} lineup players – without OP.GG link: {4} (enter in Manage)."],
    ["Gegner-Multi-Link: {} von 5 Rollen – noch ohne Link: {}.", "Enemy multi link: {1} of 5 roles – still without link: {2}."],
    ["Keine Multi-Suche möglich: {}", "No multi search possible: {1}"],
    ["OP.GG Multi-Suche {}: {}", "OP.GG multi search {1}: {2}"],
    ["{} (Prime League: {})", "{1} (Prime League: {2})"],
    ["Draft: {}", "Draft: {1}"],
    ["Das ist keine gültige Sicherungsdatei des {} Planers.", "This is not a valid {1} Planer backup file."],
    ["Die Verbindung zum {} Planer funktioniert.", "The connection to {1} Planer works."],
    ["Tier {}", "Tier {1}"],
    ["Profil {}", "Profile {1}"],
    ["Alle aktuellen Daten werden durch die Sicherung ersetzt ({n} Spieler:innen, {n} Spieltage). Fortfahren?", "All current data will be replaced by the backup ({1} players, {2} matchdays). Continue?"],
    ["{} wirklich entfernen?", "Really remove {1}?"]
  ];

  // ---------------------------------------------------------------- Engine
  const LS_KEY = "unc_lang";
  let lang = "de";
  try { const s = localStorage.getItem(LS_KEY); if (s === "en" || s === "de") lang = s; } catch (e) {}

  const esc = s => s.replace(/[.*+?^$()|[\]\\{}]/g, "\\$&");
  const GROUP = { "{}": "([\\s\\S]*?)", "{n}": "(\\d+)", "{t}": "(\\d{1,2}:\\d{2})" };
  const compiled = TEMPLATES.map(([de, en]) =>
    [new RegExp("^" + de.split(/(\{n\}|\{t\}|\{\})/).map(p => GROUP[p] || esc(p)).join("") + "$"), en]);

  function lookup(core){
    if (Object.prototype.hasOwnProperty.call(EXACT, core)) return EXACT[core];
    for (const [re, en] of compiled){
      const m = core.match(re);
      if (m) return en.replace(/\{(\d)\}/g, (x, i) => { const c = m[+i]; if (c == null) return ""; const r = lookupDeep(c.trim()); return r == null ? c : r; });
    }
    return null;
  }
  // zusammengesetzte Texte: erst an " · ", dann an Satzenden trennen und Teile einzeln übersetzen
  function lookupDeep(core){
    const direct = lookup(core);
    if (direct != null) return direct;
    for (const sep of [" · ", " – ", /(?<=[.!?])\s+/]){
      const parts = core.split(sep);
      if (parts.length < 2) continue;
      let hit = false;
      const out = parts.map(p => { const r = lookupDeep(p.trim()); if (r != null){ hit = true; return r; } return p; });
      if (hit) return out.join(typeof sep === "string" ? sep : " ");
    }
    return null;
  }
  // Standard-Namen aus den Daten ("Spieler 1", "Spieltag 3") überall im Text mitübersetzen
  const INLINE = [[/\bSpieler (\d+)\b/g, "Player $1"], [/\bSpieltag (\d+)\b/g, "Matchday $1"]];
  const inline = t => INLINE.reduce((a, [re, to]) => a.replace(re, to), t);
  function tr(text, l){
    if ((l || lang) !== "en" || !text) return text;
    const m = String(text).match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!m[2]) return text;
    const r = lookupDeep(m[2]);
    const out = inline(r == null ? m[2] : r);
    return out === m[2] ? text : m[1] + out + m[3];
  }

  // ---- DOM-Übersetzung
  const ATTRS = ["title", "placeholder", "aria-label", "alt"];
  const textRec = new WeakMap();   // Textknoten -> {src, out}
  const attrRec = new WeakMap();   // Element -> { attr: {src, out} }
  const SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, NOSCRIPT: 1 };

  function doText(n){
    const p = n.parentNode;
    if (!p || SKIP[p.nodeName]) return;
    const cur = n.data, rec = textRec.get(n);
    const src = rec && cur === rec.out ? rec.src : cur;
    const out = lang === "en" ? tr(src, "en") : src;
    if (rec || out !== src) textRec.set(n, { src, out });
    if (out !== cur) n.data = out;
  }
  function doAttr(el, a){
    const cur = el.getAttribute(a);
    if (cur == null) return;
    let recs = attrRec.get(el); if (!recs){ recs = {}; attrRec.set(el, recs); }
    const rec = recs[a];
    const src = rec && cur === rec.out ? rec.src : cur;
    const out = lang === "en" ? tr(src, "en") : src;
    if (rec || out !== src) recs[a] = { src, out };
    if (out !== cur) el.setAttribute(a, out);
  }
  function walk(root){
    if (!root) return;
    if (root.nodeType === 3){ doText(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 9 && root.nodeType !== 11) return;
    if (root.nodeType === 1){ for (const a of ATTRS) doAttr(root, a); }
    const w = document.createTreeWalker(root, 1 | 4);
    let n;
    while ((n = w.nextNode())){
      if (n.nodeType === 3) doText(n);
      else for (const a of ATTRS) doAttr(n, a);
    }
  }
  let mo = null;
  function startObserver(){
    if (mo || !document.body) return;
    mo = new MutationObserver(muts => {
      for (const m of muts){
        if (m.type === "childList") m.addedNodes.forEach(walk);
        else if (m.type === "characterData") doText(m.target);
        else if (m.type === "attributes") doAttr(m.target, m.attributeName);
      }
    });
    mo.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }
  function stopObserver(){ if (mo){ mo.disconnect(); mo = null; } }

  function apply(){
    document.documentElement.lang = lang;
    if (lang === "en"){ walk(document.body); startObserver(); }
    else { stopObserver(); walk(document.body); }   // zurück auf die Originaltexte
  }

  // alert/confirm im Browser-Dialog ebenfalls übersetzen
  const _alert = window.alert.bind(window), _confirm = window.confirm.bind(window);
  window.alert = m => _alert(tr(String(m)));
  window.confirm = m => _confirm(tr(String(m)));

  window.UI = {
    lang: () => lang,
    locale: () => (lang === "en" ? "en-GB" : "de-DE"),
    T: s => tr(s),
    Tl: (s, l) => tr(s, l),
    set(l){
      if (l !== "en" && l !== "de") return;
      lang = l;
      try { localStorage.setItem(LS_KEY, l); } catch (e) {}
      apply();
      if (typeof window.__langChanged === "function") window.__langChanged(l);
    },
    apply
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply);
  else apply();
})();
