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
- Weiß und Hellgrau (`#f6f9fc`) im Wechsel, getrennt durch feine Linien.
- Höchstens ein dunkles Navy-Band pro Seite (Speaker-Einladung: „Unsere Reichweite“).
- Viel Luft: Sektionen mit 120 bis 140 px Abstand oben und unten.

### Zeichen und Ornament
- Einziges Symbol: der Stern ✦ in Magenta (klein) bzw. Weiß im Hero.
- Unter jeder Abschnittsüberschrift ein kurzer Magenta-Strich (48 × 1 px).
- Keine Muster, keine Texturen, keine Sacred-Geometry-Grafiken. Tiefe entsteht nur durch die Göttinnen-Bilder.

### Typo-Skala
| Rolle | Stil |
|---|---|
| Hero-Überschrift | Adamina, groß (`.hero-title`), Weiß |
| Abschnittsüberschrift | Adamina, `.section-title`, ein bis zwei Zeilen |
| Kicker über der Überschrift | Inter 11 px, Versalien, Sperrung 7 px, `#64748b` |
| Kartentitel | Adamina 22 bis 24 px |
| Fließtext | Inter 300, 17 bis 19 px, Zeilenhöhe 1,8 |
| Kleingedrucktes | Inter 13 px, `#64748b`, nie kleiner |

### Bausteine (nur diese)
1. **Weiße Karte:** weiß, Rahmen `#e2e8f0`, Radius 12 px, weicher Schatten.
2. **Navy-Kasten:** `#151a2d`, weiße Schrift, höchstens einmal pro Seite (Rechenbeispiel).
3. **Zahlenband:** große Adamina-Zahlen in Weiß auf Navy, durch feine Linien getrennt.
4. **Liste:** kurzer Magenta-Strich als Aufzählungszeichen.
5. **Prinzip-Zeile:** Text mit 2 px Magenta-Linie am linken Rand, ohne Kasten.
6. **Ruhige Textspalten:** drei Spalten ohne Kartenhintergrund, Kicker in Magenta.
7. **Buttons:** gefüllt in Magenta nur für die eine Haupt-Aktion („Interviewtermin buchen“), alle anderen mit Magenta-Rahmen. Eckenradius 12 px wie Karten und Video, global auf allen Seiten (auch Formularfeld und Header-Button; Button im Formularfeld 8 px).

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
- Verboten: das Wort „leise“; „kaufen“ oder „bestellen“ als Aufforderung.
- Reihenfolge der Gastgeber: Georg Martinka vor Sandra Hirsch.
- Fremde Texte nie wörtlich übernehmen, keine Spuren anderer Seiten.

## 6. Seitenmuster (Referenz Speaker-Einladung)
1. Hero mit Universum, Hauptversprechen, ein Button
2. Der Unterschied (Vergleich „Das übliche Modell“ / „Bei uns: viele Schritte weiter“), Video
3. Unsere Reichweite (Navy-Band, Zahlen)
4. So läuft es (drei Schritte)
5. Thema, Publikum & Schwerpunkte
6. Beteiligung mit Rechenbeispiel und „Wo ist der Haken?“
7. Morgen-E-Mail
8. Zuordnung (First come, first served)
9. Gastgeber
10. Löwenanteil der Arbeit
11. Wir machen die Technik (Werbelinks)
12. Zeitplan mit heißer Werbezeit
13. Häufige Fragen
14. Interviewtermin
15. Support & Kontakt

## 7. Ablage und Benennung
- Dateien in Drive: „p2611summitawl - Selbsterklärende Funktion - Version“ (z. B. „p2611summitawl - Hintergrund Göttin hell - V1“).
- Dateien im Repo: `assets/p2611summitawl-<funktion>-v<nr>.<endung>` in Kleinbuchstaben.
- Drive-Ordner: „p2611summitawl - Awakening Leaders Kongress 2027“.

## 8. Arbeitsablauf
1. Änderung zuerst in der Claude-Vorschau zeigen.
2. Freigabe durch Georg.
3. Hochladen auf GitHub (`main` geht sofort live).
4. Eintrag im Arbeitsprotokoll von `PROJEKT.md` im selben Commit.
5. Zentrale Entscheidungen im Product Book (ClickUp) festhalten, signiert.

---

Author: Claude (Anthropic) · im Auftrag der Geschäftsleitung (Georg) · 25.11.2026
