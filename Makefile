dev:
	docker run -dit --name curriculum -p 8080:80 -v $(PWD)/dist:/usr/local/apache2/htdocs httpd:latest
	./node_modules/gulp/bin/gulp.js watch
prod:
	docker run -dit --name curriculum -p 8080:80 -v $(PWD)/dist:/usr/local/apache2/htdocs httpd:latest
	./node_modules/gulp/bin/gulp.js all 
stop:
	docker container stop curriculum
	docker rm curriculum
test:
	echo "test"
