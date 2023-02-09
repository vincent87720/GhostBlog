GHOST_VERSION:= 5.33.8
NODE_VERSION := 16.13.0
THEME_VERSION := attila-3.6.1
THE_BASE_DIR_PATH := $(abspath $(dir $(MAKEFILE_LIST)))

init: set install

build: exportContent replaceContent

set: setConfig

install: installDependency

start: startInstance

stop: stopInstance

backup: backupInstance


.PHONY: installDependency
installDependency:
	# cd ./versions/$(GHOST_VERSION); yarn install;
	. ${HOME}/.nvm/nvm.sh && nvm install 16.13.0 && nvm use ${NODE_VERSION}; \
	ghost update --force

.PHONY: installDarwinTools
installDarwinTools:
	brew install wget

.PHONY: startInstance
startInstance:
	. ${HOME}/.nvm/nvm.sh && nvm install 16.13.0 && nvm use ${NODE_VERSION}; \
	ghost start

.PHONY: stopInstance
stopInstance:
	ghost stop

.PHONY: backupInstance
backupInstance:
	ghost export backup/file;
	ghost backup;
	ls backup-* | sed 's#\(^backup-.*zip\)#mv \1 ./backup#' | sh;

.PHONY: setConfig
setConfig:
	ghost config set database.connection.filename $(THE_BASE_DIR_PATH)/content/data/ghost-local.db
	ghost config set paths.contentPath $(THE_BASE_DIR_PATH)/content
	ghost config set url http://127.0.0.1:2368/

.PHONY: exportContent
exportContent:
	mkdir -p docs
	rm -rf docs/*
	wget --mirror --convert-links --page-requisites -nH --no-parent -P docs http://127.0.0.1:2368/ || :

.PHONY: replaceContent
replaceContent:
	# find ./docs -type f -name 'style.css?*' -exec rm {} \;
	# find ./docs -type f -name 'script.js?*' -exec rm {} \;
	# find ./docs/assets/font -type f -name '*?*' -exec rm {} \;
	# find ./docs -type f -name '*?*' -exec rm {} \;
	rm -rf ./docs/assets/*
	find ./docs -type f -name '*.html' -exec ./replace.pl {} \;
	cp -Rf content/themes/$(THEME_VERSION)/assets/* docs/assets/
