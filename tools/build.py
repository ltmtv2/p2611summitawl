import re,json,subprocess,html,sys
src=open('/home/claude/al/project/Startseite-v0-1.dc.html').read()
script=re.search(r'<script type="text/x-dc"[^>]*>(.*?)</script>',src,re.S).group(1)
js="class DCLogic{constructor(){this.props={};this.state={}}}\n"+script+"\nconsole.log(JSON.stringify(new Component().renderVals()))"
data=json.loads(subprocess.check_output(['node','-e',js]).decode())
helmet=re.search(r'<helmet>(.*?)</helmet>',src,re.S).group(1)
body=re.search(r'</helmet>(.*?)</x-dc>',src,re.S).group(1)
def lookup(path,ctx):
    cur=ctx
    for p in path.split('.'):
        cur=cur[p] if isinstance(cur,dict) else None
    return cur
def subst(t,ctx):
    return re.sub(r'\{\{\s*([\w.$]+)\s*\}\}',lambda m: html.escape(str(lookup(m.group(1),ctx)).replace('&nbsp;','\u00a0')) if lookup(m.group(1),ctx) is not None else m.group(0),t)
def render(t,ctx):
    out='';i=0
    while True:
        m=re.compile(r'<sc-for\s+list="\{\{\s*([\w.]+)\s*\}\}"\s+as="(\w+)"[^>]*>').search(t,i)
        if not m: out+=subst(t[i:],ctx); break
        out+=subst(t[i:m.start()],ctx)
        depth=1;j=m.end()
        while depth:
            o=t.find('<sc-for',j); c=t.find('</sc-for>',j)
            if o!=-1 and o<c: depth+=1; j=o+7
            else: depth-=1; j=c+9
        inner=t[m.end():j-9]
        for item in lookup(m.group(1),ctx) or []:
            out+=render(inner,{**ctx,m.group(2):item})
        i=j
    return out
html_body=render(body,data)
html_body=html_body.replace('/_blob/a07e92d1f4270085ff5f278cf4aa2aa7','assets/p2611summitawl-hero-universum-v1.jpg').replace('/_blob/e20d6d2e7e20c49453337d82dc381ad5','assets/p2611summitawl-schluss-universum-v1.jpg')
helmet=helmet.replace('/_blob/a07e92d1f4270085ff5f278cf4aa2aa7','assets/p2611summitawl-hero-universum-v1.jpg').replace('/_blob/e20d6d2e7e20c49453337d82dc381ad5','assets/p2611summitawl-schluss-universum-v1.jpg')
assert '{{' not in html_body, re.findall(r'.{30}\{\{.{30}',html_body)[:3]
assert '_blob' not in html_body+helmet
page=f'''<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Awakening Leaders 2027 – Online-Kongress von Georg Martinka und Sandra Hirsch</title>
<meta name="description" content="Kostenloser Online-Kongress vom 19. bis 28. Januar 2027: 30 Expertenbeiträge und drei Live-Abende mit Georg Martinka und Sandra Hirsch.">
<meta name="robots" content="noindex, nofollow">
{helmet.strip()}
</head>
<body>
{html_body.strip()}
</body>
</html>
'''
open('index.html','w').write(page)
print(len(page))
