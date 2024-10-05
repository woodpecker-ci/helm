.PHONY: all

.PHONY: test

.PHONY: clean

.PHONY: docs
docs:
	helm-docs

.PHONY: lint
lint:
	helm lint charts/woodpecker/
	helm lint charts/woodpecker/charts/server
	helm lint charts/woodpecker/charts/agent

.PHONY: test
test:
	helm unittest --strict -f 'unittests/**/*.yaml' ./charts/woodpecker/
