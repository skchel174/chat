init: down services-done pull build up ws-init frontend-init

services-done: ws-done frontend-done

up:
	docker-compose up -d

down:
	docker-compose down -v --remove-orphans

pull:
	docker-compose pull

build:
	docker-compose build

# FRONTEND
frontend-init: frontend-install frontend-ready

frontend-install:
	docker-compose run --rm frontend-cli npm install

frontend-start:
	docker-compose run --rm frontend-cli npm run start

frontend-build:
	docker-compose run --rm frontend-cli npm run build

frontend-ready:
	docker run --rm -v ${PWD}/frontend:/app -w /app alpine touch .is-ready

frontend-done:
	docker run --rm -v ${PWD}/frontend:/app -w /app alpine sh -c 'rm -rf .is-ready'

# WS
ws-init: ws-install ws-ready

ws-install:
	docker-compose run --rm ws-cli npm install

ws-start:
	docker-compose run --rm ws-cli npm run start

ws-ready:
	docker run --rm -v ${PWD}/ws:/app -w /app alpine touch .is-ready

ws-done:
	docker run --rm -v ${PWD}/ws:/app -w /app alpine sh -c 'rm -rf .is-ready'