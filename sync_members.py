"""Rewrite the members block in data.js from the member record Excel."""
import os, re, sys
HERE = os.path.dirname(os.path.abspath(__file__))
XLSX = os.path.join(HERE, '..', '..', 'Materials', 'BNI_Jupiter_Member_Record_LT16.xlsx')
try:
    import openpyxl
except ImportError:
    os.system(f'"{sys.executable}" -m pip install --quiet --user openpyxl'); import openpyxl
ws = openpyxl.load_workbook(XLSX, data_only=True).active
rows = []
for r in ws.iter_rows(values_only=True):
    if r[0] and re.match(r'^[A-H]\d{1,2}$', str(r[0]).strip()) and r[2]:
        name = re.sub(r'([A-Za-z.])([一-鿿])', r'\1 \2', str(r[2]).strip())
        rows.append(f'{str(r[0]).strip()} {name}')
p = os.path.join(HERE, 'data.js'); s = open(p, encoding='utf-8').read()
block = 'members: `\n' + '\n'.join(rows) + '\n`,'
s2 = re.sub(r'members: `.*?`,', lambda m: block, s, count=1, flags=re.S)
open(p, 'w', encoding='utf-8').write(s2)
print(f'已由 Excel 更新 {len(rows)} 位會員')
