import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "2.6.4"
    id("io.spring.dependency-management") version "1.0.11.RELEASE"
    kotlin("jvm") version "1.6.10"
    kotlin("plugin.spring") version "1.6.10"
    jacoco
}

jacoco {
    toolVersion = "0.8.7"
}

group = "com.thoughtworks.x.hello"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_11

repositories {
    mavenCentral()
}

dependencies {
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    
    implementation("org.springframework.boot:spring-boot-starter-web")
    
    implementation("org.springdoc:springdoc-openapi-ui:1.6.6")
    implementation("org.springdoc:springdoc-openapi-kotlin:1.6.6")
    implementation("org.springdoc:springdoc-openapi-data-rest:1.6.6")
    
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    
    testImplementation("io.kotest:kotest-assertions-core:5.2.1")
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "11"
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}

tasks.test {
    finalizedBy(tasks.jacocoTestReport)
}
tasks.jacocoTestReport {
    dependsOn(tasks.test)
}

tasks.jacocoTestReport {
    reports {
        xml.required.set(false)
        csv.required.set(true)
        csv.outputLocation.set(layout.buildDirectory.file("reports/jacoco/test/csv/testReport.csv"))
    }
}
