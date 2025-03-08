import unicodedata

# Zeichenliste
glyphs = ["֎", "E", "ü", "©", "€", "֍", "☯", "😇", "⚛"]

# Tabelle mit Unicode-Informationen erstellen
print(f"{'Zeichen':<8}{'Unicode Codepoint':<18}{'UTF-8':<20}{'UTF-16be':<20}{'UTF-32be':<20}{'Name'}")
print("="*90)

for char in glyphs:
    codepoint = f"U+{ord(char):04X}"
    utf8 = char.encode("utf-8").hex()
    utf16 = char.encode("utf-16be").hex()
    utf32 = char.encode("utf-32be").hex()
    name = unicodedata.name(char, "N/A")
    
    print(f"{char:<8}{codepoint:<18}{utf8:<20}{utf16:<20}{utf32:<20}{name}")