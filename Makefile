.PHONY: all

.PHONY: test

.PHONY: clean

.PHONY: docs
docs:
	helm-docs && cd charts/woodpecker && helm dependency update && cd ../../ && prettier -w .

lint-markdown:
	markdownlint-cli2 *.{md,markdown}

lint-yaml:
	yamllint --strict -f colored .

lint-editorconfig:
	editorconfig-checker --config .editorconfig-checker.json .

lint-helm:
	helm lint --with-subcharts charts/*

.PHONY: lint
lint: lint-helm lint-yaml lint-markdown lint-editorconfig

.PHONY: test
test:
	helm unittest --strict -f 'unittests/**/*.yaml' ./charts/woodpecker/
