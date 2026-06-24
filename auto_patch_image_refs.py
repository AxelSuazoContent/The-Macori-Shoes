import pathlib
import difflib
import unicodedata

root = pathlib.Path('.')
js_path = root / 'products.js'
img_folder = root / 'Img' / 'zapatos'
text = js_path.read_text(encoding='utf-8')
refs = []
for part in text.split('img/zapatos/')[1:]:
    fn = part.split("'")[0]
    fn = fn.split('"')[0]
    refs.append(fn)
real = [fn.name for fn in img_folder.iterdir() if fn.is_file()]
real_lower = {fn.lower(): fn for fn in real}

def norm(s):
    s = s.lower()
    s = ''.join(ch for ch in s if ch.isalnum())
    return unicodedata.normalize('NFKD', s)

real_norm = {norm(fn): fn for fn in real}

mapping = {}
for ref in sorted(set(refs)):
    if ref.lower() in real_lower:
        continue
    normalized = norm(ref)
    if normalized in real_norm:
        mapping[ref] = real_norm[normalized]
        continue
    # choose best approximate by diff ratio
    scores = [(difflib.SequenceMatcher(a=normalized, b=norm(fn)).ratio(), fn) for fn in real]
    best_score, best_fn = max(scores)
    if best_score >= 0.8:
        mapping[ref] = best_fn
    else:
        print('UNMATCHED', ref)

if not mapping:
    print('No mismatches found.')
    raise SystemExit(0)

print('Mappings to apply:')
for old, new in mapping.items():
    print(f'{old} -> {new}')

new_text = text
for old, new in mapping.items():
    new_text = new_text.replace(f'img/zapatos/{old}', f'img/zapatos/{new}')

js_path.write_text(new_text, encoding='utf-8')
print(f'Applied {len(mapping)} replacements.')
