VERSION := 3.42.5
THE_BASE_DIR_PATH := $(abspath $(dir $(MAKEFILE_LIST)))

init: set install

set: setConfig

install: installDependency

start: startInstance

stop: stopInstance

backup: backupInstance


.PHONY: installDependency
installDependency:
	cd ./versions/$(VERSION); yarn install;

.PHONY: startInstance
startInstance:
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
