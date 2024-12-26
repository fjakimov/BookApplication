# Stage 1: Build the backend (Spring Boot)
FROM maven:latest AS backend-builder

# Set working directory
WORKDIR /app

# Copy the backend files (BookAPI)
COPY pom.xml /app/pom.xml
COPY src /app/src

# Build the backend using Maven (skip tests if desired)
WORKDIR /app
RUN mvn install -DskipTests

# Stage 2: Run the backend
FROM openjdk:19-jdk AS backend

# Set working directory
WORKDIR /app

# Copy the built artifact from the builder stage
COPY --from=backend-builder /app/target/*.jar /app/BookAPI.jar

# Expose the backend port
EXPOSE 8080

# Run the backend
CMD ["java", "-jar", "/app/BookAPI.jar"]
