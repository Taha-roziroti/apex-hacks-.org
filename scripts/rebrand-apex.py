#!/usr/bin/env python3
"""One-shot rebrand: Wardogs template -> Apex Legends Cheats (apexhacks.org)."""
from __future__ import annotations

import os
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SKIP_DIRS = {".git", "node_modules", "dist", ".astro"}

# Order matters: longer / more specific tokens first.
REPLACEMENTS: list[tuple[str, str]] = [
    ("https://buywardogscheat.com", "https://apexhacks.org"),
    ("buywardogscheat.com", "apexhacks.org"),
    ("buywardogscheat", "apexhacks"),
    ("wardogscheats.org", "apexhacks.org"),
    ("wardogscheats", "apexlegendscheats"),
    ("Wardogs Cheats", "Apex Legends Cheats"),
    ("Wardogs cheats", "Apex Legends cheats"),
    ("Wardogs cheat", "Apex Legends cheat"),
    ("Wardogs Cheat", "Apex Legends Cheat"),
    ("Wardogs", "Apex Legends"),
    ("WARDOGS", "APEX LEGENDS"),
    ("wardogs-cheats", "apex-legends-cheats"),
    ("wardogs-cheat", "apex-legends-cheat"),
    ("buy-wardogs-cheats", "buy-apex-legends-cheats"),
    ("buy-wardogs-cheat", "buy-apex-legends-cheat"),
    ("get-wardogs-cheats", "get-apex-legends-cheats"),
    ("get-wardogs-cheat", "get-apex-legends-cheat"),
    ("wardogs-esp", "apex-legends-esp"),
    ("wardogs-aimbot", "apex-legends-aimbot"),
    ("buy-wardogs-esp", "buy-apex-legends-esp"),
    ("buy-wardogs-aimbot", "buy-apex-legends-aimbot"),
    ("ultimate-wardogs-cheats-guide", "ultimate-apex-legends-cheats-guide"),
    ("best-wardogs-cheats-review-2026", "best-apex-legends-cheats-review-2026"),
    ("wardogs-cheats-lifetime", "apex-legends-cheats-lifetime"),
    ("wardogs-cheat-discord", "apex-legends-cheat-discord"),
    ("wardogs-aimbot-options", "apex-legends-aimbot-options"),
    ("slug: 'wardogs'", "slug: 'apex-legends'"),
    ("getGame('wardogs')", "getGame('apex-legends')"),
    ('guideSlug="wardogs-cheats"', 'guideSlug="apex-legends-cheats"'),
    ("/products/wardogs", "/products/apex-legends"),
    ("/media/wd-", "/media/apex-"),
    ("wd-hero-full", "apex-hero-full"),
    ("wd-cover", "apex-cover"),
    ("wd-menu", "apex-menu"),
    ("wd-video-thumb", "apex-video-thumb"),
    ("wd-screenshot", "apex-screenshot"),
    ("wd-tactical-art", "apex-tactical-art"),
    ("wd-control-art", "apex-control-art"),
    ("wd-home-art", "apex-home-art"),
    ("WD_HOME_VIDEO", "APEX_HOME_VIDEO"),
    ("WD_HERO", "APEX_HERO"),
    ("WD_COVER", "APEX_COVER"),
    ("WD_MENU", "APEX_MENU"),
    ("WD_VIDEO_THUMB", "APEX_VIDEO_THUMB"),
    ("WD_OG", "APEX_OG"),
    ("WD_PRODUCT_HERO", "APEX_PRODUCT_HERO"),
    ("WD_PRODUCT_COVER", "APEX_PRODUCT_COVER"),
    ("generate-wardogs-forums.mjs", "generate-apex-forums.mjs"),
    ("prepare-wardogs-media.mjs", "prepare-apex-media.mjs"),
    ("wardogs-cheats.jpg", "apex-legends-cheats.jpg"),
    ("/og/wardogs-cheats.jpg", "/og/apex-legends-cheats.jpg"),
    ("Wardogs on Steam", "Apex Legends on Steam"),
    ("https://store.steampowered.com/app/2427520/WARDOGS/", "https://store.steampowered.com/app/1172470/Apex_Legends/"),
    ("SITE_HOST = 'buywardogscheat.com'", "SITE_HOST = 'apexhacks.org'"),
    ('name: "buywardogscheat"', 'name: "apexhacks"'),
    ('pattern = "buywardogscheat.com"', 'pattern = "apexhacks.org"'),
    ('pattern = "www.buywardogscheat.com"', 'pattern = "www.apexhacks.org"'),
    ("dayzcheats", "apexlegendscheats"),
    ('aria-label="Buy Wardogs cheats"', 'aria-label="Buy Apex Legends cheats"'),
    ('>WD<', '>AL<'),
    ('"Wardogs"', '"Apex Legends"'),
    ("Wardogs ", "Apex Legends —"),
    ("Wardogs cheats ", "Apex Legends cheats —"),
]

TEXT_EXTENSIONS = {
    ".ts",
    ".tsx",
    ".astro",
    ".mjs",
    ".js",
    ".json",
    ".md",
    ".css",
    ".txt",
    ".toml",
    ".svg",
    ".xml",
    ".html",
}


def should_process(path: Path) -> bool:
    if any(part in SKIP_DIRS for part in path.parts):
        return False
    if path.suffix and path.suffix not in TEXT_EXTENSIONS:
        return False
    if path.name == "rebrand-apex.py":
        return False
    return True


def apply_replacements(text: str) -> str:
    for old, new in REPLACEMENTS:
        text = text.replace(old, new)
    return text


def main() -> None:
    changed = 0
    for path in ROOT.rglob("*"):
        if not path.is_file() or not should_process(path):
            continue
        try:
            original = path.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError):
            continue
        updated = apply_replacements(original)
        if updated != original:
            path.write_text(updated, encoding="utf-8")
            changed += 1
    print(f"Updated {changed} files")

    old_page = ROOT / "src/pages/wardogs-cheats.astro"
    new_page = ROOT / "src/pages/apex-legends-cheats.astro"
    if old_page.exists():
        new_page.write_text(apply_replacements(old_page.read_text(encoding="utf-8")), encoding="utf-8")
        old_page.unlink()
        print("Renamed wardogs-cheats.astro -> apex-legends-cheats.astro")

    old_script = ROOT / "scripts/generate-wardogs-forums.mjs"
    new_script = ROOT / "scripts/generate-apex-forums.mjs"
    if old_script.exists() and not new_script.exists():
        new_script.write_text(old_script.read_text(encoding="utf-8"), encoding="utf-8")
        old_script.unlink()


if __name__ == "__main__":
    main()
