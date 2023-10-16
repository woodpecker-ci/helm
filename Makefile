.PHONY: all

.PHONY: test

.PHONY: clean

.PHONY: docs
docs:
	helm-docs

.PHONY: test
test:
	helm unittest --strict -f 'unittests/**/*.yaml' ./charts/woodpecker/
