init: down frontend-stop pull build up frontend-init

up:
	docker-compose up -d

down:
	docker-compose down -v --remove-orphans

pull:
	docker-compose pull

build:
	docker-compose build

frontend-init: frontend-install frontend-ready

frontend-install:
	docker-compose run --rm frontend-cli npm install

frontend-start:
	docker-compose run --rm frontend-cli npm run start

frontend-build:
	docker-compose run --rm frontend-cli npm run build

frontend-ready:
	docker run --rm -v ${PWD}/frontend:/app -w /app alpine touch .is-ready

frontend-stop:
	docker run --rm -v ${PWD}/frontend:/app -w /app alpine sh -c 'rm -rf .is-ready'