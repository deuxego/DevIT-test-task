start:
	make start_client & make start_server

start_client: 
		cd ./client && npm run dev
start_server: 
		cd ./server && npm run start