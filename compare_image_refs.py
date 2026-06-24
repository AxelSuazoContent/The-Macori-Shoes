import pathlib
import re
root = pathlib.Path(r'd:\The macory shoes')
js = root / 'products.js'
text = js.read_text(encoding='utf-8')
imgs = []
for part in text.split('img/zapatos/')[1:]:
    fn = part.split("'")[0]
    fn = fn.split('"')[0]
    imgs.append(fn)
real_files = list((root / 'Img' / 'zapatos').iterdir())
real = {fn.name.lower(): fn.name for fn in real_files if fn.is_file()}
missing = [fn for fn in sorted(set(imgs)) if fn.lower() not in real]
print('missing_count=', len(missing))
for m in missing:
    print('MISSING', m)
print('---')
for fn in sorted(set(imgs)):
    if fn.lower() in real and fn != real[fn.lower()]:
        print('CASE MISMATCH', fn, '->', real[fn.lower()])
print('---')
print('Total referenced images:', len(imgs))
print('Unique referenced images:', len(set(imgs)))
