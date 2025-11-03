.PHONY: install up stop down renew prod

ifneq (,$(wildcard ./.env))
    include .env
    export
endif

cmd-exists-%:
	@hash $(*) > /dev/null 2>&1 || \
		(echo "ERROR: '$(*)' must be installed and available on your PATH."; exit 1)

install:  ## Build and run Docker Compose services
	docker compose build --no-cache development
	docker compose up --force-recreate development

up:  ## Run Docker Compose services for development stage
	docker compose up development

stop:  ## Run Docker Compose services for development stage
	docker compose stop development

down:  ## Shutdown Docker Compose services for development stage
	docker compose down development

renew:  ## Build, renew volumes and run Docker Compose services for development stage
	docker compose up --renew-anon-volumes development

prod:  ## Build and run Docker Compose services for production stage
	docker compose up -d production
