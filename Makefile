run:
	docker compose up --build

ui-test:
	cd app-ui; \
	ng test
