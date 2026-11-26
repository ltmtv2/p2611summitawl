# Stilguide Awakening Leaders 2027 (p2611summitawl)

Verbindlich für alle Seiten, Grafiken und Texte des Online-Kongresses „Awakening Leaders 2027“ von Georg Martinka und Sandra Hirsch. Er baut auf dem ME-Design auf und legt fest, was dieses Projekt eigen macht. Bei Widersprüchen gilt dieser Stilguide vor allgemeinen Gewohnheiten, das ME-Design bleibt die Basis.

Musterseite: `/speakereinladung` (awakeningleaders.me/speakereinladung).

---

## 1. Leitmotiv: Die erwachende Göttin

- **Kernbild:** Eine Frau tritt aus dem Marmor ins Licht. Erwachen, Würde und Führung ohne Lautstärke.
- **Haltung:** ruhige Autorität („calm authority“), stille Führung („quiet leadership“). Edel statt esoterisch, klar statt kitschig.
- **Spannung der Seite:** Universum im Hero (Weite, Ursprung) und Marmor in den Sektionen (Form, Gegenwart).
- **Zielgruppe der Bildwelt:** überwiegend Frauen, die selbst Coaches, Heilerinnen und Expertinnen sind. Die Texte bleiben trotzdem für alle Geschlechter offen.

## 2. Basis aus dem ME-Design (unverändert)

| Element | Wert |
|---|---|
| Überschriften | Adamina, nur eine Strichstärke (400) |
| Fließtext | Inter 300, Hervorhebungen 400 und 500 |
| Hintergrund hell | `#f6f9fc` und `#ffffff` |
| Überschriften-Farbe | `#0f172a` |
| Fließtext-Farbe | `#475569` |
| Gedämpft (Kicker, Hinweise) | `#64748b` |
| Navy (Hero, dunkles Band, Rechenbeispiel) | `#151a2d` |
| Akzent | Magenta `#a90499` |
| Linien | `#e2e8f0`, 1 px |

Satzregeln: keine Hurenkinder und Schusterjungen, geschützte Leerzeichen (`&nbsp;`) vor dem letzten Wort und zwischen Zahl und Einheit (`100&nbsp;%`, `57&nbsp;€`).

## 3. Projekt-Eigenheiten

### Farbdisziplin
- Magenta ist Akzent, keine Fläche. Voll gefüllt nur der Haupt-Button und ein einziges Highlight pro Seite (auf der Speaker-Einladung: „Heiße Werbezeit“).
- Kein Grün, kein Rot, keine Ampelfarben, keine Emojis.

### Rhythmus der Sektionen
- Weiß und Hellgrau (`#f6f9fc`) streng im Wechsel, getrennt durch feine Linien. Nach einem dunklen Band beginnt der Wechsel wieder mit Weiß.
- Höchstens ein dunkles Navy-Band pro Seite (Speaker-Einladung: „Unsere Reichweite“).
- Luft, aber nicht zu viel: Sektionen mit 150 px Abstand oben und unten, 72 px zwischen Blöcken (280 px war zu viel, die Seite wurde zu lang).
- Keine Doppelungen: Jeder Inhalt (z. B. „Drei Schritte“, Technik) steht nur einmal auf der Seite.

### Zeichen und Ornament
- Einziges Symbol: der Stern ✦ in Magenta (klein) bzw. Weiß im Hero.
- Unter jeder Abschnittsüberschrift ein kurzer Magenta-Strich (48 × 1 px).
- Keine Sacred-Geometry-Grafiken, keine Hexagone. Tiefe entsteht durch Marmor: Göttinnen, Skulpturen und Marmor-Texturen (siehe Bildwelt).
- Graue Sektionen tragen das Onyx-Muster mit 7 % Deckkraft. Einzelne Sektionen dürfen eine eigene Marmor-Textur mit 30 % haben (Zielgruppen: Eis-Marmor, Support: Himmel-Marmor).

### Typo-Skala
| Rolle | Stil |
|---|---|
| Hero-Überschrift | Adamina, groß (`.hero-title`), Weiß |
| Abschnittsüberschrift | Adamina, `.section-title`, ein bis zwei Zeilen; optisch feiner durch 0,8 px Kontur in Hintergrundfarbe (`-webkit-text-stroke`, `paint-order: fill stroke`), weil Adamina nur einen Schnitt hat |
| Kicker über der Überschrift | Inter 11 px, Versalien, Sperrung 7 px, `#64748b` |
| Kartentitel, h3 | Adamina 22 bis 25 px, ohne Kontur (auch Win-Etiketten ohne Kontur) |
| Fließtext | Inter 300, 17 bis 19 px, Zeilenhöhe 1,8 |
| Kleingedrucktes | Inter 13 px, `#64748b`, nie kleiner |

### Bausteine (nur diese)
1. **Weiße Karte:** weiß, Rahmen `#e2e8f0`, Radius 12 px, weicher Schatten.
2. **Navy-Kasten:** `#151a2d`, weiße Schrift, höchstens einmal pro Seite (Rechenbeispiel).
3. **Zahlenband:** große Adamina-Zahlen in Weiß auf Navy, durch feine Linien getrennt.
4. **Liste:** kurzer Magenta-Strich als Aufzählungszeichen.
5. **Prinzip-Zeile:** Text mit 2 px Magenta-Linie am linken Rand, ohne Kasten.
6. **Ruhige Textspalten:** drei Spalten ohne Kartenhintergrund, Kicker in Magenta.
7. **Glas-Kachel:** `rgba(255,255,255,.55)`, `backdrop-filter: blur(16px)`, weißer Rand, Radius 12 px. Für Vergleichskarten, Zielgruppen, Gastgeber. Auf Marmor-Hintergründen.
8. **Glasfläche statt Kachelraster:** mehrere Punkte auf einer gemeinsamen Glasfläche mit Haarlinien dazwischen (Support, Expertenbeitrag im weißen Rahmen). Einzelne kleine Kacheln wirken billig.
9. **Mockups:** Solo-Mail, iPhone-Reel (Dynamic Island, Statusleiste, Home-Balken, ohne Markenzeichen) und Social-Grafik mit Midjourney-Foto einer Interviewpartnerin; darunter immer „Beispiel mit erfundenem Namen, Symbolmockups, entspricht nicht den endgültigen Werbedesigns“.
10. **Portraits:** groß, Hochformat 4:5, eckig mit oberer Rundung der Karte. Keine runden Avatare, keine Hexagone.
11. **Buttons:** gefüllt in Magenta nur für die eine Haupt-Aktion („Interviewtermin buchen“), alle anderen mit Magenta-Rahmen. Eckenradius 12 px wie Karten und Video, global auf allen Seiten (auch Formularfeld und Header-Button; Button im Formularfeld 8 px).

## 4. Bildwelt: Göttinnen aus Marmor

### Regeln
- Griechische Göttinnen aus weißem Marmor, sehr reduziert, ausdrücklich weiblich („female“).
- Keine Requisiten, keine Sockel, keine Steine, keine Architektur, kein Gold, keine Blumen, keine Leuchteffekte.
- Querformat 16:9, Figur im rechten Drittel, zwei Drittel leer. Für linke Positionen wird per Code gespiegelt.
- Varianten erwünscht: nah, fern, von unten (Froschperspektive), von oben, links und rechts gewandt. Immer dieselbe Haltung.
- Nur in Sektionen mit seitlicher Luft, nie hinter Video, Kartenrastern oder Kalender.
- Abwechselnd links und rechts.

### Einbau auf der Seite
| Hintergrund | Bild | Einblendung | Deckkraft |
|---|---|---|---|
| Weiß / `#f6f9fc` | Figur auf reinem Weiß | `mix-blend-mode: multiply` | 6,5 % (Handy 5,5 %) |
| Navy `#151a2d` | Figur auf reinem Schwarz | `mix-blend-mode: screen` | 6,5 % (Handy 5,5 %) |

Weicher Verlauf zur Textseite hin (`mask-image: linear-gradient`). Vor dem Einbau wird der Bildhintergrund auf reines Weiß bzw. Schwarz korrigiert.

### Prompts, die zu den freigegebenen Bildern geführt haben

**Hell** (Referenz: `assets/p2611summitawl-hintergrund-goettin-hell-v1.jpg`):
```
a single classical greek marble goddess, standing upright with calm authority, chin slightly raised, gaze into the distance, simple flowing drapery, pure reduced form, no props, no pedestal, no stones, no architecture, soft luminous white marble, placed in the right third of the frame, the left two thirds completely empty pure white, the figure dissolving softly into white light at its edges, soft diffused light, barely any shadow, seamless pure white background, restrained, minimal, divine presence, quiet leadership, fine art photography --ar 16:9 --style raw --stylize 100 --no text, frame, border, color, ornament, flowers, gold, glow effects
```

**Dunkel** (Referenz: `assets/p2611summitawl-hintergrund-goettin-dunkel-v1.jpg`):
```
a single classical greek marble goddess, standing upright with calm authority, chin slightly raised, gaze into the distance, simple flowing drapery, pure reduced form, no props, no pedestal, no stones, no architecture, soft luminous white marble, placed in the right third of the frame, the left two thirds completely empty pure black, a faint cool lavender rim light tracing her silhouette, the figure dissolving softly into darkness at its edges, seamless pure black background, restrained, minimal, divine presence, quiet leadership, fine art photography --ar 16:9 --style raw --stylize 100 --no text, frame, border, ornament, flowers, gold, glow effects
```

### Weitere freigegebene Motive
| Motiv | Datei | Einsatz |
|---|---|---|
| Göttin freigestellt, Froschperspektive | `p2611summitawl-hintergrund-goettin-froschperspektive-v4.jpg` | „Der Unterschied“, unten über volle Breite, 30 % |
| Infinity-Skulptur | `p2611summitawl-bild-infinity-skulptur-v3.jpg` | Win #2 (Lifetime), groß, mittig unten, 50 % |
| Marmor-Arena | `p2611summitawl-hintergrund-arena-marmor-v2.jpg` | Win #4, flaches Band unten, 30 %, Verlauf nach oben |
| Eis-Marmor | `p2611summitawl-hintergrund-eis-marmor-v2.jpg` | Zielgruppen, 30 % |
| Himmel-Marmor | `p2611summitawl-hintergrund-himmel-marmor-v2.jpg` | Support, 30 % |
| Onyx-Muster | `p2611summitawl-hintergrund-onyx-muster-v2.jpg` | alle grauen Sektionen, 7 % |
| Interview-Foto (Midjourney) | `p2611summitawl-mockup-interview-foto-v2.jpg` | Mockups; keine echte Person mit erfundenem Namen |

### Technik der Bilddateien
- Nur JPG, höchstens 130 KB, höchstens 1920 px breit. Keine PNGs auf der Seite.
- Transparente Vorlagen werden auf Weiß gelegt und als JPG gespeichert; sie stehen nur auf weißen Flächen. Kein Kontrastfilter darauf (macht Weiß grau).
- Jede Bilddatei beginnt mit `p2611summitawl-`; bei jeder Änderung steigt die Versionsnummer.

### Weitere Motive erzeugen
- In Midjourney eines der Referenzbilder in die Eingabezeile ziehen und als „Style reference“ verwenden.
- Den Basis-Prompt behalten und nur Perspektive und Ausschnitt ändern. Beim hellen Prompt „female“ ergänzen (die erste helle Figur wirkt eher männlich).
- Gegen Kitsch: `--stylize 100`, die `--no`-Liste nie kürzen, Wörter wie „mystical“ oder „ethereal“ vermeiden.

## 5. Sprache und Ton
- Du-Form, offen für alle Geschlechter.
- Positiv und menschlich, nicht konfrontativ. Andere Veranstalter nie abwerten („Das übliche Modell“ statt „alle anderen“).
- Keine Einkommens- oder Heilversprechen. Zahlenbeispiele immer als „Rechenbeispiel“ mit „keine Garantie“ kennzeichnen.
- Keine künstliche Verknappung.
- Feste Begriffe: „Expertenbeiträge“ (nie anders), „E-Mail-Leben“, „Interviewtermin“, „Solo-Newsletter“, „Kongresspaket“.
- Verboten: das Wort „leise“; „kaufen“ oder „bestellen“ als Aufforderung. Beschreibend ist „kaufen“ erlaubt und gewünscht („alles, was diese Menschen später kaufen“).
- Speaker nicht anbetteln: Die Einladung ist eine Auszeichnung. Was wir bieten (radikal andere Vergütung, Bühne für die Botschaft), steht selbstbewusst im Vordergrund. Professionelle Organisation ist selbstverständlich und wird nicht beworben.
- Reihenfolge der Gastgeber: Georg Martinka vor Sandra Hirsch.
- Fremde Texte nie wörtlich übernehmen, keine Spuren anderer Seiten.

## 6. Seitenmuster (Referenz Speaker-Einladung, Stand 26.11.2026)
1. Hero mit Universum, Hauptversprechen, ein Button
2. Der Unterschied: „Als wäre es dein Kongress.“, Unterzeile zur Botschaft, Video, Glas-Vergleichskarten
3. Dein Win #1 bis #4 (100 % vom Kongresspaket-Preis mit Rechenbeispiel, Lifetime, Fremdangebote, Morgen-E-Mail mit Mockups und „Bewährt“-Hinweis)
4. Unsere Reichweite (Navy-Band, Zahlen)
5. Zuordnung (First come, first served)
6. Expertenbeitrag (weißer Glasrahmen)
7. Werbematerial (Mockups, Werbelinks; Technik in einem Satz)
8. Wo ist der Haken?
9. Zielgruppen (sieben Glas-Kacheln)
10. Gastgeber (große Portraits)
11. Dein Teil (die einzigen drei Schritte)
12. Zeitplan mit heißer Werbezeit (vertikal)
13. Häufige Fragen
14. Interviewtermin (Calendly mit Ersatzkarte, falls er nicht lädt)
15. Support (Glasfläche auf Himmel-Marmor)

## 6a. Mobil (unter 640 px)
- Nichts darf breiter als der Bildschirm sein; `overflow-x: clip` auf `html` und `body`.
- Hero-Überschrift `min(8vw, 40px)`, Sektionsüberschriften `min(7.6vw, 34px)` bzw. 30 px in zweispaltigen Sektionen.
- Alle Raster einspaltig mit `minmax(0, 1fr)`, keine festen Mindestbreiten.
- Geschützte Leerzeichen nur bei kurzen Wortpaaren; lange Paare brechen auf dem Handy nicht um.
- Prüfen bei 375 und 320 px Breite.

## 7. Ablage und Benennung
- Dateien in Drive: „p2611summitawl - Selbsterklärende Funktion - Version“ (z. B. „p2611summitawl - Hintergrund Göttin hell - V1“).
- Dateien im Repo: `assets/p2611summitawl-<funktion>-v<nr>.<endung>` in Kleinbuchstaben.
- Drive-Ordner: „p2611summitawl - Awakening Leaders Kongress 2027“.

## 8. Arbeitsablauf
1. Änderung zuerst in der Claude-Vorschau zeigen.
2. Freigabe durch Georg.
3. Hochladen auf GitHub (`main` geht sofort live).
4. Eintrag im Arbeitsprotokoll von `PROJEKT.md` im selben Commit.
5. Zentrale Entscheidungen im Product Book (ClickUp) festhalten, signiert, und neue Gestaltungsregeln hier und auf der ClickUp-Seite „Stilguide Awakening Leaders“ nachtragen. Das passiert im selben Arbeitsschritt wie die Veröffentlichung, nicht gesammelt später.

---

Author: Claude (Anthropic) · im Auftrag der Geschäftsleitung (Georg) · 25.11.2026, aktualisiert 26.11.2026
