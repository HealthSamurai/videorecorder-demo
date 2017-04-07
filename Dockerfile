FROM java:8
COPY backend/target/videorecorder.jar /var/videorecorder.jar
EXPOSE 8080

RUN mkdir -p /var/videorecorder-resources
RUN apt-get install ffmpeg

ENTRYPOINT ["java", "-cp", "/var/videorecorder.jar", "clojure.main", "-m", "web"]

CMD ["start"]
