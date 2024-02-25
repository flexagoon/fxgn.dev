hugo:
    hugo server -D

tailwind:
    tailwindcss -i static/css/input.css -o static/css/style.css --minify --watch 

serve:
    just hugo & just tailwind
