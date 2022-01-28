FROM openjdk:17

LABEL Jacqueline="j.chabrny@yahoo.de"

ADD backend/target/karriereapp-struggle.jar karriereapp-struggle.jar

CMD [ "sh", "-c", "java-Dserver.port=$PORT -Dspring.data.mongodb.uri=$URI -jar /karriereapp-struggle.jar"]