#!/bin/bash
# Builds self-contained, iframe-ready full HTML pages from the two-part embed files.
# Output files live at repo root so GitHub Pages serves them at:
#   https://zenjessica.github.io/growpro/launch.html
#   https://zenjessica.github.io/growpro/marketing.html
#   https://zenjessica.github.io/growpro/operator.html
#   https://zenjessica.github.io/growpro/home.html

set -e
cd "$(dirname "$0")"

build_configurator() {
  local name="$1"
  local embed1="growpro-${name}-embed1-html.html"
  local embed2="growpro-${name}-embed2-js.html"
  local out="${name}.html"

  if [[ ! -f "$embed1" || ! -f "$embed2" ]]; then
    echo "SKIP ${name}: missing $embed1 or $embed2"
    return
  fi

  {
    echo '<!DOCTYPE html>'
    echo '<html lang="en">'
    echo '<head>'
    echo '<meta charset="UTF-8">'
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
    echo "<title>GrowPro $(echo ${name^} | sed 's/^./\U&/') Configurator</title>"
    echo '<meta name="robots" content="noindex">'
    echo '<style>html,body{margin:0;padding:0;background:#fff;font-family:Inter,system-ui,sans-serif}</style>'
    echo '<script>if("scrollRestoration" in history){history.scrollRestoration="manual"}window.addEventListener("load",function(){window.scrollTo(0,0);try{if(window.parent&&window.parent!==window){window.parent.postMessage({type:"growpro-loaded",scrollTop:true},"*")}}catch(e){}});</script>'
    cat "$embed1" | grep -oE '<link [^>]*fonts\.googleapis[^>]*>' | head -3
    echo '</head>'
    echo '<body>'
    cat "$embed1"
    cat "$embed2"
    echo '</body>'
    echo '</html>'
  } > "$out"

  echo "BUILT ${out} ($(wc -c < "$out") bytes)"
}

build_home() {
  local src="legacy/growpro-home.html"
  local out="home.html"

  if [[ ! -f "$src" ]]; then
    echo "SKIP home: missing $src"
    return
  fi

  {
    echo '<!DOCTYPE html>'
    echo '<html lang="en">'
    echo '<head>'
    echo '<meta charset="UTF-8">'
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
    echo '<title>GrowPro - Build Your Telehealth Brand</title>'
    echo '<meta name="robots" content="noindex">'
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">'
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
    echo '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">'
    echo '<style>html,body{margin:0;padding:0;background:#0B0B0F;color:#fff;font-family:Inter,system-ui,sans-serif}</style>'
    echo '</head>'
    echo '<body>'
    cat "$src"
    echo '</body>'
    echo '</html>'
  } > "$out"

  echo "BUILT ${out} ($(wc -c < "$out") bytes)"
}

build_configurator "launch"
build_configurator "marketing"
build_configurator "marketing-content-2026"
build_configurator "full-stack"
build_configurator "operator"
build_home

echo ""
echo "=== All files built ==="
ls -la launch.html marketing.html operator.html home.html 2>/dev/null

# Also create a simple index page that links to all four
cat > index.html <<'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GrowPro Configurators</title>
<meta name="robots" content="noindex">
<style>
body{font-family:Inter,system-ui,sans-serif;background:#0B0B0F;color:#fff;padding:40px;max-width:720px;margin:0 auto}
h1{font-size:28px;margin-bottom:8px}
p{color:#888;margin-bottom:32px}
a{display:block;padding:16px 20px;background:#1a1a20;color:#fff;text-decoration:none;border-radius:10px;margin-bottom:12px;transition:background .15s}
a:hover{background:#25252e}
small{color:#666}
</style>
</head>
<body>
<h1>GrowPro Configurators</h1>
<p>Auto-synced from <code>zenjessica/growpro</code> on GitHub. Embed these pages via iframe in Webflow.</p>
<a href="home.html">Home Hero <small>&mdash; launch.kickstartsocial.co landing section</small></a>
<a href="launch.html">Launch Configurator <small>&mdash; Template $18K / Custom $27K / Operator $40K</small></a>
<a href="marketing.html">Marketing Configurator <small>&mdash; Core $3.5K/mo + Meta Ads $4K/mo</small></a>
<a href="operator.html">Operator Configurator <small>&mdash; Elite / Founder / Accelerator</small></a>
</body>
</html>
EOF

echo "BUILT index.html"
