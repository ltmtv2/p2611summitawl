# Awakening Leaders 2027

Interne Produktnummer: **p2611summitawl**. Diese Datei ist die gemeinsame Projektdatei. Alle Bots und Google AI Studio lesen sie vor jeder Arbeit.

## Pflicht für jede KI und jeden Bot (auch Google AI Studio)

1. Vor jeder Arbeit diese Datei `PROJEKT.md` vollständig lesen.
2. Nach jeder Änderung im selben Commit einen Eintrag ins Arbeitsprotokoll schreiben: Datum, Uhrzeit Berlin, wer, was, warum, betroffene Dateien.
3. Neue Entscheidungen, Zugänge (ohne Passwörter), offene Punkte und nächste Schritte ebenfalls hier festhalten, damit jede Übergabe nur aus dieser Datei möglich ist.
4. Jede Änderung auf `main` geht sofort live auf [awakeningleaders.me](https://awakeningleaders.me) und der Vercel-Adresse.

## Eckdaten

- **Projekt:** Awakening Leaders 2027 (ME Online Kongress) von Georg Martinka und Sandra Hirsch, 19.–28. Januar 2027, kostenloser Online-Kongress.
- **Interne Produktnummer:** p2611summitawl. Alle Dateien für diesen Kongress tragen diesen Prefix. Die alte Nummer p202305k5 / K5 und die Digistore-Nummer 498824 gehören zum Kongress 2023 und dürfen hier nicht verwendet werden.
- **Domain:** [awakeningleaders.me](https://awakeningleaders.me), gekauft am 25.11.2026 bei Namecheap. `www.awakeningleaders.me` leitet auf die Hauptdomain weiter.
- **Code:** GitHub-Repository [ltmtv2/p2611summitawl](https://github.com/ltmtv2/p2611summitawl), Branch `main`.
- **Hosting:** Vercel-Projekt [p2611summitawl](https://vercel.com/georg-9086s-projects/p2611summitawl) im Team von Georg. Arbeits-URL: [https://p2611summitawl.vercel.app](https://p2611summitawl.vercel.app). Jeder Push auf `main` wird automatisch produktiv veröffentlicht.
- **Product Book:** [ME Online Kongress: Awakening Leaders](https://app.clickup.com/42647640/docs/18ng2r-8435/18ng2r-7175)
- **ClickUp-Liste:** [Awakening Leaders Kongress](https://app.clickup.com/42647640/v/l/li/1201290000005877)
- **ExpertInnen-Datenbank:** [ExpertInnen Datenbank](https://app.clickup.com/42647640/v/l/li/901525770492)

## Arbeitsweise

Die Programmierarbeit läuft kostenschonend in Google AI Studio. GitHub ist der gemeinsame Stand für alle.

Jede Änderung auf `main` geht bewusst sofort live. Es gibt keinen Freigabe-Branch. Das ist Georgs Entscheidung.

Nach jeder Änderung gehört ein datierter Eintrag ins Arbeitsprotokoll unten (Datum, Uhrzeit Berlin, wer, was, warum, betroffene Dateien), und zwar im selben Commit.

## Regeln

- Änderungen an der öffentlichen Seite werden danach an Atlas (Administration) gemeldet und im Product Book eingetragen. Seraphin übernimmt das, wenn er Neues im Repo sieht.
- Einträge im Product Book werden in der Versionszeile mit „Grok“ signiert.
- Texte niemals mit „bestellen“ oder „kaufen“ als Aufforderung schreiben.
- Pro Seite und pro Video nur eine Call-to-Action.
- Newsletter und Anmeldung laufen über Kit, nicht über ActiveCampaign.
- Keine Zugangsdaten, Passwörter, Tokens oder Schlüssel ins Repo, in ClickUp oder in diese Datei legen.

## Aktueller Stand

Startseite Version 0.1: statisches HTML in `index.html`, Platzhalter-Bilder in `assets/`, Generator `tools/build.py`. Die Seite ist vorerst für Suchmaschinen ausgeblendet (`noindex, nofollow`). Das Anmeldeformular ist noch nicht an Kit angebunden.

Es wurde keine `vercel.json` angelegt. Die Seite wird als statisches Projekt ohne Build-Befehl aus dem Repo-Root veröffentlicht.

## Offene Punkte und nächste Schritte

- Die Domain ist gekauft und bei Vercel eingetragen. Die DNS-Einträge stehen bei Namecheap, die öffentliche Namensauflösung und das Zertifikat warten aber noch auf die Weitergabe der neuen Domain durch die Registry. Bis dahin die Arbeits-URL [https://p2611summitawl.vercel.app](https://p2611summitawl.vercel.app) nutzen.
- Bei Namecheap liegt noch ein alter URL-Park-Eintrag auf der Hauptdomain, den die Schnittstelle nicht löschen konnte. Die A-Einträge sind gesetzt. Falls die Domain später auf einer Parkseite landet, diesen URL-Eintrag in den erweiterten DNS-Einstellungen bei Namecheap entfernen.
- Anmeldeformular an Kit anbinden.
- `noindex, nofollow` erst entfernen, wenn die Seite freigegeben ist.

## Arbeitsprotokoll

- **25.11.2026, vormittags (ca. 09:47 Berlin) — Claude / Apollo:** Startseite Version 0.1 als statisches HTML ins Repo gelegt (`index.html`, `assets/`, `tools/build.py`, `README.md`). In der ClickUp-Projektdoku als Nachtrag v2.10 festgehalten. Seite trägt `noindex, nofollow`, Anmeldeformular noch nicht an Kit angebunden.
- **25.11.2026, 09:58 Berlin — Seraphin:** Domain awakeningleaders.me bei Namecheap gekauft (Bestellung 220502495, 10,98 $ für das erste Jahr, automatische Verlängerung ab 25.11.2027).
- **25.11.2026, 10:02 Berlin — Seraphin:** Vercel-Projekt p2611summitawl im Team von Georg angelegt und mit dem GitHub-Repo (Branch `main`) verbunden. Das Produktions-Deployment ist bereit unter https://p2611summitawl.vercel.app. Die Domains awakeningleaders.me und www.awakeningleaders.me (Weiterleitung 308 auf die Hauptdomain) wurden dem Projekt hinzugefügt.
- **25.11.2026, 10:04 Berlin — Seraphin:** DNS bei Namecheap gesetzt, ohne die Nameserver zu ändern: A-Einträge `@` auf 216.150.1.1 und 216.150.16.1, CNAME `www` auf 3f07151839ef22cb.vercel-dns-016.com. Öffentliche Namensauflösung und Zertifikat standen zu diesem Zeitpunkt noch aus, weil die Registry die neue Domain noch nicht weitergegeben hatte.
- **25.11.2026, 10:06 Berlin — Seraphin:** Gemeinsame Projektdatei `PROJEKT.md` und kurze `AGENTS.md` angelegt, Verweis in `README.md` ergänzt. Pflicht festgehalten: vor jeder Arbeit diese Datei lesen, jeden Schritt im Arbeitsprotokoll dokumentieren, Übergaben nur aus dieser Datei; jede Änderung auf `main` geht sofort live. Betroffene Dateien: `PROJEKT.md`, `AGENTS.md`, `README.md`.
- **25.11.2026, 10:18 Berlin — Google AI Studio:** Minimalen Express-Static-Server (`server.js`), `package.json` und `metadata.json` ergänzt, damit die unveränderte statische Startseite (`index.html`, `assets/`) in Google AI Studio auf Port 3000 startet. Betroffene Dateien: `package.json`, `server.js`, `metadata.json`, `PROJEKT.md`.
- **25.11.2026, 10:26 Berlin — Google AI Studio:** Reihenfolge der sieben Chakra-Schwerpunkte in `section#speaker` auf Georgs Wunsch umgekehrt (von Krone nach unten bis Wurzel) und den Einleitungssatz entsprechend angepasst („von der Krone bis zur Wurzel“). Außerdem alle Speaker-Portrait-Karten im Abschnitt `#speaker` mit leicht abgerundeten Ecken (`border-radius: 12px`) und 15-%-Schatten (`rgba(21, 26, 45, 0.15)`) versehen. Betroffene Dateien: `index.html`, `PROJEKT.md`.
- **25.11.2026, 10:28 Berlin — Google AI Studio:** Fixierte Top-Header-Leiste (`#countdown-bar`) mit Live-Countdown bis zum Kongressstart (19. Januar 2027, 18:00 Uhr MEZ) in `index.html` eingebaut, ohne zusätzliche CTA-Schaltfläche (gemäß Ein-CTA-Regel). Betroffene Dateien: `index.html`, `PROJEKT.md`.
- **25.11.2026, 10:31 Berlin — Google AI Studio:** Speaker-Portraits in `section#speaker` auf Georgs Wunsch vergrößert (Gastgeber 290 px, Speaker-Karten 280 px), den Abstand dazwischen deutlich erhöht (`56px`) und sowohl die Raster (`.speaker-grid`) als auch die Bildunterschriften (`.speaker-card`) zentriert. Betroffene Dateien: `index.html`, `PROJEKT.md`.
- **25.11.2026, 10:34 Berlin — Google AI Studio:** Top-Header-Leiste (`#countdown-bar`) auf Georgs Wunsch reduziert und verfeinert: den Text „KONGRESSSTART AM 19. JANUAR 2027 · 18 UHR“ entfernt und den reinen Live-Countdown zentriert im selben ruhigen Versal-Stil (`10px`, `letter-spacing: 4px`, Mittelpunkt-Trenner, symmetrische Stern-Akzente) gestaltet. Betroffene Dateien: `index.html`, `PROJEKT.md`.
- **25.11.2026, 10:43 Berlin — Google AI Studio:** Startseite als vollständigen Klon unter `speakereinladung/index.html` (Route `/speakereinladung`) angelegt, Bildpfade darin auf `/assets/...` gestellt (für statisches Hosting auf Vercel und lokalen Server) und die Route `/speakereinladung` in `server.js` ergänzt. Betroffene Dateien: `speakereinladung/index.html`, `server.js`, `PROJEKT.md`.
- **25.11.2026, 10:51 Berlin — Google AI Studio:** Dezentes, barrierefreies Flyout-Navigationsmenü zentral in `assets/p2611summitawl-nav.js` umgesetzt und auf Startseite (`/`) sowie `/speakereinladung` eingebunden: unauffälliger „.“-Auslöser direkt in der Footer-Zeile neben Impressum/Datenschutz (`aria-label="Navigation öffnen"`, `aria-expanded`), helles Seitenpanel rechts (Desktop 320 px mit Inhaltsverschiebung um 320 px nach links in 0,4 s; Mobil 85 % bis max. 384 px ohne Verschiebung), leicht verschwommener Overlay (0,3 s), Scroll-Sperre im Hintergrund, Fokusfalle/Fokusrückgabe und Escape-Steuerung. Verlinkt sind aktuell ausschließlich die tatsächlich vorhandenen Routen (`/` und `/speakereinladung`); alle weiteren Gruppenpunkte liegen zentral als vorbereitete Einträge (`href: null`) ohne erfundene Routen vor. Betroffene Dateien: `assets/p2611summitawl-nav.js`, `index.html`, `speakereinladung/index.html`, `package.json`, `PROJEKT.md`.
- **25.11.2026, 11:15 Berlin — Google AI Studio:** Seite `/speakereinladung` (`speakereinladung/index.html`) komplett renoviert im Designsystem von Awakening Leaders 2027 mit den vorgegebenen Abschnitten in exakter Reihenfolge: Herobereich („Persönliche Speaker-Einladung“, „Hallo [SPEAKER-NAME 1], wir möchten dich einladen!“, vorhandene Kongressdaten zu Name, Thema und Zielgruppe), Einladungsvideo-Platzhalter, Kontaktbereich mit `tel:`-Platzhalter-Link und Button „Gespräch buchen“ (scrollt zu `#terminbuchung`), 6 Speaker-Vorteile mit Platzhalterbeschreibungen, Abschnitt `#terminbuchung` („Buche direkt deinen Gesprächstermin“, 20–30 Minuten, Widget-Platzhalter) sowie Footer mit Copyright, Impressum, Datenschutz und beibehaltenem „.“-Flyout-Auslöser. Keine Inhalte erfunden, keine anderen Seiten geändert. Betroffene Dateien: `speakereinladung/index.html`, `PROJEKT.md`.
- **25.11.2026, 11:16 Berlin — Google AI Studio:** Sandras Calendly-Kalender (`https://calendly.com/memethod-sandra-hirsch/awakening-leaders-kongress-interview-mit-sandra-hirsch`) im Abschnitt `#terminbuchung` auf `/speakereinladung` als Inline-Widget (mit Markenfarben `#a90499`/`#0f172a` und Direktlink-Fallback) eingebettet. Betroffene Dateien: `speakereinladung/index.html`, `PROJEKT.md`.
- **25.11.2026, 11:18 Berlin — Google AI Studio:** Hinweiszeile „Gesprächsdauer ca. 20–30 Minuten“ im Abschnitt `#terminbuchung` auf `/speakereinladung` auf Georgs Wunsch entfernt. Betroffene Dateien: `speakereinladung/index.html`, `PROJEKT.md`.
- **25.11.2026, 11:20 Berlin — Google AI Studio:** Hintergrund der Sektion `#terminbuchung` auf `/speakereinladung` auf Weiß (`#ffffff`) umgestellt und das Calendly-Widget breiter (`1060px`, Desktop-Zweispalter) sowie mit automatischer Höhenanpassung (`data-resize="true"` + `calendly.page_height`-Listener) eingebunden, damit im Kalender-iFrame kein Scrollen nötig ist. Betroffene Dateien: `speakereinladung/index.html`, `PROJEKT.md`.
- **25.11.2026, 12:57 Berlin — Claude:** Auf Georgs Wunsch drei Änderungen veröffentlicht, vorher mit ihm in der Claude-Vorschau abgestimmt. (1) Startseite: versteckten „.“-Auslöser des Flyout-Menüs aus der Footer-Zeile in den Herobereich (`section#anmeldung`) unten rechts verlegt, damit das Menü ohne Scrollen erreichbar ist. (2) `/speakereinladung` komplett neu als allgemeine Seite für alle Speaker (keine individuellen Speaker-Seiten mehr), Hauptbotschaft „100 % Provision plus Lifetime-Provision auf Folgeprodukte“. Abschnitte: Hero mit Button „Interviewtermin buchen“, Vergleich mit üblichen Kongressen, drei Schritte mit Video-Platzhalter, Beteiligung (100 % Kongresspaket, Lifetime auf eigene Folgeangebote und empfohlene Fremdangebote, gekennzeichnetes Rechenbeispiel ohne Einnahmegarantie), „Wo ist der Haken? Es gibt keinen.“, Zuordnung nach First come, first served (Partner-ID im Hidden Field, nie überschrieben), Gastgeber, „Wir machen die Technik“ mit Werbelink `awakeningleaders.me?aff=DIGISTORE24ID`, Zeitplan mit heißer Werbezeit 10.–19.01.2027 (nur Solo-Newsletter, Social Media nur zusätzlich), FAQ, Calendly-Interviewtermin, Support & Kontakt (WhatsApp, support@me.jetzt, me.jetzt/support). Keine künstliche Verknappung. Magentafarbene „prüfen“-Markierungen sind bewusst sichtbar und warten auf Georgs Angaben (Interviewlänge, Belege Georg, Readings-Zahl Sandra, Liste, Prüfung des Newsletter-Versands). Offen technisch: `?aff=` wird noch nicht ausgelesen und das Formular ist nicht an Kit angebunden (ClickUp-Task 124j4fvvj94). (3) Menü: Platzhalter „Speaker-Einladung 2/3“ entfernt, Eintrag heißt nur noch „Speaker-Einladung“. Betroffene Dateien: `index.html`, `speakereinladung/index.html`, `assets/p2611summitawl-nav.js`, `PROJEKT.md`.
- **25.11.2026, 13:16 Berlin — Claude:** `/speakereinladung`, Sektion „Support & Kontakt“: die drei Links (WhatsApp, E-Mail, Kontaktformular) auf Georgs Wunsch als Buttons mit Magenta-Rahmen gestaltet, damit „Interviewtermin buchen“ der einzige volle Magenta-Button bleibt; support@me.jetzt steht dafür im Text der Mail-Karte. Betroffene Dateien: `speakereinladung/index.html`, `PROJEKT.md`.
