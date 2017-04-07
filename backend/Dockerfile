FROM java:8
EXPOSE 8080
VOLUME /var/aidbox
RUN mkdir /root/.ssh && touch /root/.ssh/known_hosts && chmod 0600 /root/.ssh/known_hosts

RUN mkdir -p /var/aidbox-resources/public/
COPY config/production_logback.xml /var/aidbox-resources/logback.xml

ENTRYPOINT ["java", "-cp", "/var/aidbox-resources:/var/aidbox.jar", "clojure.main", "-m", "web"]

CMD ["start"]
