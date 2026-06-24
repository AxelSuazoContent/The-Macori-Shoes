import pathlib
root = pathlib.Path(r'd:\The macory shoes')
js_file = root / 'products.js'
real = {fn.name for fn in (root / 'Img' / 'zapatos').iterdir() if fn.is_file()}
mapping = {
    'img/zapatos/candelaria-blanco-1.jpeg': 'img/zapatos/candelaria blanco.jpeg',
    'img/zapatos/candelaria-caramel-1.jpeg': 'img/zapatos/candelaria caramel.jpeg',
    'img/zapatos/candelaria-gold-1.jpeg': 'img/zapatos/candelaria negro.jpeg',
    'img/zapatos/candelaria-negro-1.jpeg': 'img/zapatos/candelaria negro.jpeg',
    'img/zapatos/candelaria-silver-1.jpeg': 'img/zapatos/candelaria silver .jpeg',
    'img/zapatos/candes-negro-cow-1.jpeg': 'img/zapatos/candes cow.jpeg',
    'img/zapatos/candy-beige-1.jpeg': 'img/zapatos/candy beige .jpeg',
    'img/zapatos/candy-gold-1.jpeg': 'img/zapatos/candy gold .jpeg',
    'img/zapatos/candy-negro-1.jpeg': 'img/zapatos/candy negro .jpeg',
    'img/zapatos/carmella-burgundy-1.jpeg': 'img/zapatos/carmelia vino .jpeg',
    'img/zapatos/carmella-cafe-1.jpeg': 'img/zapatos/carmellia cafe .jpeg',
    'img/zapatos/carmella-negro-1.jpeg': 'img/zapatos/carmelia negro .jpeg',
    'img/zapatos/carmia-cow-1.jpeg': 'img/zapatos/carmia cow .jpeg',
    'img/zapatos/carmia-leopardo-1.jpeg': 'img/zapatos/carmia leopardo .jpeg',
    'img/zapatos/carmia-rojo-1.jpeg': 'img/zapatos/carmia rojo.jpeg',
    'img/zapatos/celia-negro-1.jpeg': 'img/zapatos/celia negro .jpeg',
    'img/zapatos/celia-rosita-1.jpeg': 'img/zapatos/celia rosa.jpeg',
    'img/zapatos/chic-buckle-negro-1.jpeg': 'img/zapatos/chic buckle negro.jpeg',
    'img/zapatos/chic-buckle-vino-1.jpeg': 'img/zapatos/chic buckle vino.jpeg',
    'img/zapatos/choe-negro-1.jpeg': 'img/zapatos/choe negros.jpeg',
    'img/zapatos/choe-rojo-1.jpeg': 'img/zapatos/choe rojos.jpeg',
    'img/zapatos/cleva-negro-1.jpeg': 'img/zapatos/cleva negro.jpeg',
    'img/zapatos/constantine negro.jpeg': 'img/zapatos/constantine cafe .jpeg',
    'img/zapatos/coraline-blanco-1.jpeg': 'img/zapatos/caroline blanco .jpeg',
    'img/zapatos/coraline-negro-1.jpeg': 'img/zapatos/caroline negro.jpeg',
    'img/zapatos/coraline-rojo-1.jpeg': 'img/zapatos/caroline cafe .jpeg',
    'img/zapatos/estefania-beige-1.jpeg': 'img/zapatos/estefania beige .jpeg',
    'img/zapatos/estefania-blanco-1.jpeg': 'img/zapatos/estefania blanco .jpeg',
    'img/zapatos/estefania-negro-1.jpeg': 'img/zapatos/estefania negro .jpeg',
    'img/zapatos/euphemie-negro-cafe-1.jpeg': 'img/zapatos/euphemie cafe .jpeg',
    'img/zapatos/evana-azul-1.jpeg': 'img/zapatos/evana azul .jpeg',
    'img/zapatos/evana-negro-1.jpeg': 'img/zapatos/evana negro .jpeg',
    'img/zapatos/evana-rosita-1.jpeg': 'img/zapatos/evana negro .jpeg',
    'img/zapatos/evana-silver-1.jpeg': 'img/zapatos/evana silver .jpeg',
    'img/zapatos/fifi-blanco-1.jpeg': 'img/zapatos/fifi blanco.jpeg',
    'img/zapatos/fifi-gold-1.jpeg': 'img/zapatos/fifi gold .jpeg',
    'img/zapatos/fifi-negro-1.jpeg': 'img/zapatos/fifi negro .jpeg',
    'img/zapatos/fiorella-blanco-1.jpeg': 'img/zapatos/fiorella blanco .jpeg',
    'img/zapatos/fiorella-negro-1.jpeg': 'img/zapatos/fiorella negro.jpeg',
    'img/zapatos/fiorella-rojo-1.jpeg': 'img/zapatos/fiorella rojo .jpeg',
    'img/zapatos/harlow-beige-1.jpeg': 'img/zapatos/harlow beige.jpeg',
    'img/zapatos/harlow-cefe-1.jpeg': 'img/zapatos/harlow cafe.jpeg',
    'img/zapatos/harlow-negro-1.jpeg': 'img/zapatos/harlow negro.jpeg',
    'img/zapatos/harmonie-negro-cafe-1.jpeg': 'img/zapatos/harmonie cafe .jpeg',
    'img/zapatos/hattie-gold-1.jpeg': 'img/zapatos/hattie gold .jpeg',
    'img/zapatos/hattie-negro-1.jpeg': 'img/zapatos/hattie negro .jpeg',
    'img/zapatos/hudson-blanco-1.jpeg': 'img/zapatos/hudson beige .jpeg',
    'img/zapatos/hudson-tan-1.jpeg': 'img/zapatos/hudson tan .jpeg',
    'img/zapatos/masie-beige-1.jpeg': 'img/zapatos/masie beige .jpeg',
    'img/zapatos/masie-negro-1.jpeg': 'img/zapatos/masie negro .jpeg',
    'img/zapatos/masie-silver-1.jpeg': 'img/zapatos/masie silver .jpeg',
    'img/zapatos/nina-plata-1.jpeg': 'img/zapatos/nina silver .jpeg',
    'img/zapatos/rhodes-azul-1.jpeg': 'img/zapatos/rhodes azul .jpeg',
    'img/zapatos/rhodes-beige-1.jpeg': 'img/zapatos/rhodes beige .jpeg',
    'img/zapatos/vincentina-negro-cafe-1.jpeg': 'img/zapatos/vincentina cafe .jpeg',
    'img/zapatos/virginia-negro-caramel-1.jpeg': 'img/zapatos/virginia caramelo.jpeg',
}

# Validate mapping targets exist
missing_targets = [new for new in mapping.values() if new.replace('img/zapatos/', '') not in real]
if missing_targets:
    raise SystemExit('Missing target files: ' + ', '.join(missing_targets))

text = js_file.read_text(encoding='utf-8')
count = 0
for old, new in mapping.items():
    if old in text:
        text = text.replace(old, new)
        count += 1
    else:
        print('WARNING: not found in file:', old)
js_file.write_text(text, encoding='utf-8')
print(f'Applied replacements: {count}/{len(mapping)}')
