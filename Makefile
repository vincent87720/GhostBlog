GHOST_VERSION:= 5.33.8
NODE_VERSION := 16.13.0
THEME_VERSION := attila-3.6.1
THE_BASE_DIR_PATH := $(abspath $(dir $(MAKEFILE_LIST)))

init: set install

dockerun: dockerun

build: exportContent replaceContent

set: setConfig

install: installDependency

start: startInstance

stop: stopInstance

backup: backupInstance

.PHONY: dockerun
dockerun:
	docker run --rm -d \
        --name katsuobushi-ghost \
        -e NODE_ENV=development \
        -e database__connection__filename='/var/lib/ghost/content/data/ghost-local.db' \
        -p 2368:2368 \
        -v /Users/vincent/Desktop/Blog/content:/var/lib/ghost/content \
        ghost

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
	mkdir -p docs/ghost/api/content/posts/ghost/api/content/posts
	wget --mirror --convert-links --page-requisites -nH --no-parent -P docs http://localhost:2368/ || :
	wget --mirror --convert-links --page-requisites -nH --no-parent -P docs "http://localhost:2368/ghost/api/content/posts/?key=5230415085a98103bb9daaa3d3&limit=10000&fields=id%2Cslug%2Ctitle%2Cexcerpt%2Curl%2Cupdated_at%2Cvisibility&order=updated_at%20DESC" || :
	wget --mirror --convert-links --page-requisites -nH --no-parent -P docs "http://localhost:2368/ghost/api/content/authors/?key=5230415085a98103bb9daaa3d3&limit=10000&fields=id%2Cslug%2Cname%2Curl%2Cprofile_image&order=updated_at%20DESC" || :
	wget --mirror --convert-links --page-requisites -nH --no-parent -P docs "http://localhost:2368/ghost/api/content/tags/?key=5230415085a98103bb9daaa3d3&limit=10000&fields=id%2Cslug%2Cname%2Curl&order=updated_at%20DESC&filter=visibility%3Apublic" || :

.PHONY: replaceContent
replaceContent:
	# find ./docs -type f -name 'style.css?*' -exec rm {} \;
	# find ./docs -type f -name 'script.js?*' -exec rm {} \;
	# find ./docs/assets/font -type f -name '*?*' -exec rm {} \;
	# find ./docs -type f -name '*?*' -exec rm {} \;
	rm -rf ./docs/assets/*
	find ./docs -type f -name '*.*' -exec ./replace.pl {} \;
	cp -Rf content/themes/$(THEME_VERSION)/assets/* docs/assets/
	cp -Rf assets/googleSearch/* docs/
	cp -Rf assets/sitemap/* docs/
