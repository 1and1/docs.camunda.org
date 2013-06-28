<h1>Table of Contents</h1>

<div docs-toc></div>

* [Introduction](#introduction)
* [BPM Platform](#bpm-platform)
    * [Process Engine](#process-engine)
        * [Process Engine Bootstrapping](#process-engine-bootstrapping)
            * [ProcessEngineConfiguration bean](#process-engine-configuration-bean)
            * [Bootstrap a Process Engine using Java API](#bootstrap-a-process-engine-java-api)
            * [Configure Process Engine via XML](#configure-process-engine-via-xml)
        * [Process Engine API](#process-engine-api)
            * [Services API](#services-api)
            * [Query API](#query-api)
        * [Process Engine Concepts](#process-engine/concepts)
            * [Process Definitions](#process-engine/concepts/process-definitions)
            * [Process Instances](#process-engine/concepts/process-instances)
            * [Executions](#process-engine/concepts/executions)
            * [Activity Instances](#process-engine/concepts/activity-instances)            
        * [Database configuration](#database-configuration)
        * [Database table names explained](#database-table-names)
        * [Job executor activation](#job-executor-activation)
        * [History configuration](#history-configuration)
        * [Process Definition Cache](#process-definition-cache)
        * [Logging](#logging)
        * [Incidents](#incidents)
            * [Incident Types](#incident-types)
            * [(De-)Activating Incidents](#de-activating incidents)
            * [Implementing custom Incident Handlers](#implementing-custom-incident-handlers)
    * [Process Applications](#process-applications)
        * [The Process Application class](#the-process-application-class)
            * [The ServletProcessApplication](#the-servlet-process-application)
            * [The EjbProcessApplication](#the-ejb-process-application)
            * [The EmbeddedProcessApplication](#the-embedded-process-application)
            * [The SpringProcessApplication](#the-spring-process-application)
        * [The processes.xml deployment descriptor](#the-processes-xml-deployment-descriptor)
            * [Location of the processes.xml file](#processes-xml-location)
            * [Custom location for the processes.xml file](#processes-xml-custom-location)
            * [Configuring process engines in the processes.xml file](#processes-xml-configuring-process-engines)
        * [Migration from camunda fox 6.x](#migration-from-camunda-fox-6x)
    * [Runtime Container Integration](#runtime-container-integration)
        * [JNDI Bindings for BPM Platform Services](#bpm-platform-service-jndi-bindings)
        * [JNDI Bindings on Apache Tomcat 7](#bpm-platform-service-jndi-bindings-tomcat-7)
    * [Configuration and Extensions](#configuration-and-extensions)
    * [Integrating the camunda BPM platform into different Environments](#camunda-bpm-platform-integration)
    * [Cycle](#cycle)
        * [What is Cycle?](#cycle-what-is-cycle)    
        * [Connector Configuration](#cycle-connector-configuration)
            * [Siganvio Connector](#cycle-signavio-connector)
            * [Subversion Connector](#cycle-subversion-connector)
            * [File System Connector](#cycle-file-system-connector) 
            * [User Credentials](#cycle-user-credentials)
        * [BPMN 2.0 Roundtrip](#cycle-bpmn-20-roundtrip)
            * [Pool Extraction](#cycle-pool-extraction)
            * [Engine Attributes](#cycle-engine-attributes)    
* [Programming Model](#programming-model)
    * [Spring Framework Integration](#spring-framework-integration)
        * [Bootstrapping a process engine](#process-engine-bootstrap)
            * [Bootstrapping an application-managed Process Engine](#application-managed-process-engine-bootstrap)
            * [Bootstrapping a container-managed Process Engine as a Spring Bean](#container-managed-process-engine-as-a-spring-bean-bootstrap)
        * [Transactions](#transactions)
        * [Automatic resource deployment](#automatic-resource-deployment)
        * [Expression Language](#expression-language)
            * [Expression resolving with the Shared Process Engine](#expression-resolving-with-the-shared-process-engine)
        * [Testing](#testing)
    * [CDI Integration](#cdi-integration)
        * [Maven Dependency](#cdi-maven-dependency)
        * [Looking up a Process Engine](#cdi-looking-up-a-process-engine)
        * [Configuring the Process Engine](#cdi-configuring-the-process-engine)
        * [Contextual Process Execution with CDI](#cdi-contextual-process-execution)
            * [Associating a Conversation with a Process Instance](#cdi-associating-a-conversation-with-a-process-instance)
            * [Declaratively controlling the Process](#cdi-declaratively-controlling-the-process)
            * [Referencing Beans from the Process](#cdi-referencing-beans-from-the-process)
            * [Working with @BusinessProcessScoped beans](#cdi-working-with-business-process-scoped-beans)
            * [Injecting Process Variables](#cdi-injecting-process-variables)
            * [Receiving Process Events](#cdi-receiving-process-events)
        * [Additional Features](#cdi-additional-features)
* [Testing](#testing)
    * [Unit Testing](#unit-testing)
    * [Debugging unit tests](#debugging-unit-tests)
    * [Using Mocks to test your Process Application](#unit-tests-mocking)
    * [Using Arquillian to test your Process Application](#unit-tests-arquillian-to-test-your-process-application)