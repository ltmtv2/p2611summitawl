#!/usr/bin/env python3
"""Erzeugt /speakereinladung-georg aus der Vorlage /speakereinladung-sandra.

Beide Seiten sind immer identisch, außer:
  - Calendly-Kalender (Terminbuchung unten)
  - „Interview mit Sandra“ -> „Interview mit Georg“ (Zeitplan und Text über dem Kalender)

Nach jeder Änderung an speakereinladung-sandra/index.html ausführen:
  python3 tools/speakerseiten.py
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "speakereinladung-sandra" / "index.html"
DST = ROOT / "speakereinladung-georg" / "index.html"

SANDRA_CAL = "https://calendly.com/memethod-sandra-hirsch/awakening-leaders-kongress-interview-mit-sandra-hirsch"
# Georgs Calendly-Link hier eintragen, sobald er feststeht (bis dahin Sandras Kalender).
GEORG_CAL = SANDRA_CAL

REPLACEMENTS = [
    (SANDRA_CAL, GEORG_CAL, 3),
    ("Interview mit Sandra", "Interview mit Georg", 2),
]

html = SRC.read_text(encoding="utf-8")
for old, new, count in REPLACEMENTS:
    found = html.count(old)
    if found != count:
        raise SystemExit(f"Erwartet {count}× „{old}“, gefunden {found}×. Vorlage prüfen.")
    html = html.replace(old, new)
DST.parent.mkdir(exist_ok=True)
DST.write_text(html, encoding="utf-8")
print(f"OK: {DST.relative_to(ROOT)} erzeugt")
