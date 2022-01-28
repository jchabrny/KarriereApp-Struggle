FROM openjdk:17

LABEL Jacqueline="j.chabrny@yahoo.de"

ADD backend/target/karriereapp-struggle.jar karriereapp-struggle.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGO_DB_URI -jar /karriereapp-struggle.jar"]