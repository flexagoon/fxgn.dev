#!/usr/bin/env fish

# 20-7e: Basic Latin
# 2019: Apostrophe (’)
# 201C: Left Double Quotation Mark (“)
# 201D: Right Double Quotation Mark (”)
# 2190: Leftwards Arrow (←)
# 2192: Rightwards Arrow (→)
set unicodes "20-7e,2019,201C,201D,2190,2192"

function subset -a font
	fonttools subset $font \
		--unicodes=$unicodes \
		--flavor=woff2 \
		--with-zopfli \
		--layout-features='calt','kern' \
		--output-file=subset/$font
end

subset InterVariable.woff2
subset InterVariable-Italic.woff2
