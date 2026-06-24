import pathlib
import difflib
import unicodedata

root = pathlib.Path(r'd:\The macory shoes')
js = root / 'products.js'
text = js.read_text(encoding='utf-8')
refs = []
for part in text.split('img/zapatos/')[1:]:
    fn = part.split("'")[0]
    fn = fn.split('"')[0]
    refs.append(fn)
real = [fn.name for fn in (root / 'Img' / 'zapatos').iterdir() if fn.is_file()]
real_lower = {fn.lower(): fn for fn in real}


def norm(s):
    s = s.lower()
    s = ''.join(ch for ch in s if ch.isalnum())
    return unicodedata.normalize('NFKD', s)

real_norm = {norm(fn): fn for fn in real}

missing = sorted(set(refs))
print('Total refs:', len(refs), 'unique:', len(set(refs)))
print('Real files:', len(real))
print('---')
for ref in sorted(set(refs)):
    if ref.lower() in real_lower:
        continue
    if norm(ref) in real_norm:
        print(f'{ref} -> {real_norm[norm(ref)]} (normalization exact)')
        continue
    # best difflib match
    scores = [(difflib.SequenceMatcher(a=norm(ref), b=norm(real_name)).ratio(), real_name) for real_name in real]
    score, best = max(scores)
    print(f'{ref} -> {best} (score {score:.3f})')
