run:
	docker compose up --build -d

ui-test:
	cd app-ui; \
	ng test
