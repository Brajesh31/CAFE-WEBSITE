.PHONY: serve check-links

PYTHON ?= python

serve:
	$(PYTHON) -m http.server 8000

check-links:
	$(PYTHON) -c "from pathlib import Path; print('Markdown files:', len(list(Path('.').rglob('*.md'))))"
