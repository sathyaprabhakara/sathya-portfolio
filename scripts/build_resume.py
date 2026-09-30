"""Generate the downloadable vector PDF from the same content used by the résumé page.
Requires: Python 3, reportlab. Run from any directory: python3 scripts/build_resume.py
"""
import json
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / 'src/resume.json').read_text())
for name, filename in [('Resume', 'Resume-Regular.ttf'), ('ResumeBold', 'Resume-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(ROOT / 'public/fonts' / filename)))
pdfmetrics.registerFontFamily('Resume', normal='Resume', bold='ResumeBold')
output = ROOT / 'public/Sathya_Resume.pdf'
c = canvas.Canvas(str(output), pagesize=A4, pageCompression=1)
c.setTitle('Sathya P | Full-stack Software Engineer')
c.setAuthor('Sathya P')
c.setSubject('4 years of experience | Enterprise systems and AI engineering')
W, H = A4
purple = HexColor('#5936B4')
ink = HexColor('#292337')
muted = HexColor('#655E73')
lavender = HexColor('#F4F0FC')
lime = HexColor('#D8F397')

def para(text, x, y, width, size=9.4, leading=13.2, color=ink, bold=False):
    style = ParagraphStyle('resume', fontName='ResumeBold' if bold else 'Resume', fontSize=size, leading=leading, textColor=color)
    p = Paragraph(text, style)
    _, height = p.wrap(width, H)
    if y-height < 39:
        raise ValueError(f'Resume content exceeds bottom margin: {text[:55]}')
    p.drawOn(c, x, y-height)
    return y-height

def label(text, x, y, width):
    c.setFillColor(lime)
    c.rect(x-2, y-14, min(width, pdfmetrics.stringWidth(text, 'ResumeBold', 12)+5), 6, fill=1, stroke=0)
    return para(text, x, y, width, 12, 16, purple, True)-12

def bullet(text, y):
    c.setFillColor(purple)
    c.circle(225, y-5.5, 1.5, fill=1, stroke=0)
    return para(escape(text), 235, y, W-265, 9.2, 12.5)-6

# Full-bleed vector colour fields remain crisp at any zoom.
c.setFillColor(lavender); c.rect(0, 0, W, H, fill=1, stroke=0)
c.setFillColor(HexColor('#EAE2F6')); c.rect(0, 0, 197, H-190, fill=1, stroke=0)
c.setFillColor(purple); c.rect(0, H-7, W, 7, fill=1, stroke=0)
para('ENGINEERING / FULL-STACK / AI', 30, H-29, W-60, 8, 10, purple)
para(escape(data['name']), 28, H-49, W-60, 45, 51, purple, True)
para(escape(data['role']), 30, H-107, W-60, 16, 20, ink)
para(escape(data['summary']), 30, H-141, W-64, 10, 14, muted)

# Sidebar: contact and capabilities.
y = H-216
y = para('4 YEARS', 30, y, 143, 23, 27, purple, True)
y = para('OF ENGINEERING EXPERIENCE', 30, y-4, 145, 7.2, 10, muted)-24
y = label('Contact', 30, y, 145)
y = para(escape(data['location']), 30, y, 145, 9, 13)-7
y = para(f'<link href="mailto:{data["email"]}" color="#5936B4">{data["email"]}</link>', 30, y, 147, 8.1, 12)-10
for link in data['links']:
    y = para(f'<link href="{link["url"]}" color="#5936B4">{link["label"]}</link>', 30, y, 143, 9, 14)-3
y -= 12
for group in data['skills']:
    y = para(escape(group['title']), 30, y, 145, 10.5, 14, purple, True)-7
    for item in group['items']:
        y = para(escape(item), 30, y, 145, 8.8, 12, muted)-1
    y -= 10

# Main column: professional experience, followed by selected builds.
y = label('Experience', 221, H-213, 340)
y = para(escape(data['company']), 221, y, 344, 13, 17, purple, True)
y = para('Software Engineer | '+escape(data['period']), 221, y-3, 344, 8.6, 12, muted)-16
for role in data['experience']:
    y = para(escape(role['title'])+' <font color="#655E73">/ '+escape(role['subtitle'])+'</font>', 221, y, 344, 10, 14, ink, True)
    y = para(escape(role['period']), 221, y-3, 344, 8, 11, muted)-9
    for point in role['points']:
        y = bullet(point, y)
    y -= 9

y = label('Selected projects', 221, y, 344)
for project in data['projects']:
    y = para(f'<link href="{project["url"]}" color="#5936B4"><b>{escape(project["name"])}</b></link>', 221, y, 344, 10, 14)
    y = para(escape(project['description']), 221, y-3, 344, 9, 12.5, muted)-10
c.setStrokeColor(HexColor('#CEC2DF'));c.setLineWidth(.5);c.line(30, 32, W-30, 32)
c.setFont('Resume', 7);c.setFillColor(muted);c.drawString(30, 16, 'SATHYA P / RÉSUMÉ')
c.setFont('Resume', 7);c.setFillColor(muted);c.drawRightString(W-30, 16, '01 / 01')
c.save()
print(f'Created {output} | main content bottom: {y:.1f} pt')
