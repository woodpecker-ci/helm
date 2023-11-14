.PHONY: docs
docs:
	helm-docs # updates all charts including subcharts
	helm-docs -t README-main.md.gotmpl -g .

.PHONY: test
test: test-server

test-server:
	helm unittest --strict -f 'unittests/**/*.yaml' ./charts/server/
