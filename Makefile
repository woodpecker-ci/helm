.PHONY: docs
docs:
	helm-docs # updates all charts including subcharts
	helm-docs -t README-main.md.gotmpl -g .


