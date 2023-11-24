.PHONY: all

.PHONY: test

.PHONY: clean

.PHONY: docs
docs:
	helm-docs # updates all charts including subcharts
	helm-docs -t README-main.md.gotmpl -g .

.PHONY: test
test:
	helm unittest --strict -f 'unittests/**/*.yaml' ./charts/woodpecker/
