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
