FROM java:8
EXPOSE 8080

RUN mkdir -p /var/videorecorder-resources
RUN apt-get update
RUN apt-get -y install ffmpeg

COPY backend/target/videorecorder.jar /var/videorecorder.jar
COPY ./resources/public /var/videorecorder-static

ENTRYPOINT ["java", "-cp", "/var/videorecorder.jar", "clojure.main", "-m", "heartsmart.backend"]

CMD ["start"]
