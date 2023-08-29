.PHONY: docs-main
docs-main:
	helm-docs -t README-main.md.gotmpl -g .

.PHONY: docs-sub
docs-sub:
	helm-docs -t README-sub.md.gotmpl -g charts/agent,charts/server

.PHONY: docs
docs: docs-sub docs-main


