Process Engine Configuration
============================

The process engine configuration can be placed in both [processes.xml](#!/descriptors/processes-xml) and the [bpm-platform.xml](#!/descriptors/bpm-platform-xml) files. If the process engine is configured in either of both files, it will be bootratrapped by the camunda BPM platform infrastructure and be made available through `BpmPlatform.getProcessEngineService().getProcessEngine("name of process engine")`.

Example
-------

The following example shows an XML snippet which can be placed in both [processes.xml](#!/descriptors/processes-xml) and [bpm-platform.xml](#!/descriptors/bpm-platform-xml).

    <process-engine name="default">
      <job-acquisition>default</job-acquisition>
      <configuration>org.camunda.bpm.engine.impl.cfg.StandaloneProcessEngineConfiguration</configuration>
      <datasource>java:jdbc/ProcessEngine</datasource>

      <properties>
        <property name="history">full</property>
        <property name="databaseSchemaUpdate">true</property>
        <property name="authorizationEnabled">true</property>
      </properties>

    </process-engine>

Syntax Reference
----------------

<table class="table table-striped">
  <tr>
    <th>Tag name </th>
    <th>Parent tag name</th>
    <th>Required?</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>&lt;process-engine&gt;</code></td>
    <td><code>&lt;process-application&gt;</code> or <code>&lt;bpm-platform&gt;</code></td>
    <td>true</td>
    <td>
      <p>
        Container element for the configuration of a process engine.
      </p>
      <p>
        <strong>Attributes:</strong>
        <ul>
          <li>`name`: allows defining the name of the process engine (Required).</li>
        </ul>
      </p>
      <p>
        <strong>Text Content:</strong>
        None.
      </p>
    </td>
  </tr>
  <tr>
    <td><code>&lt;job-acquisition&gt;</code></td>
    <td><code>&lt;process-engine&gt;</code></td>
    <td>true</td>
    <td>
      <p>
        Assign the process engine to a job acquisition.
      </p>
      <p>
        <strong>Attributes:</strong>
        None.
      </p>
      <p>
        <strong>Text Content:</strong>
        the name of the job acquisition to be used for this process engine. Job acquisitions are configured in the [bpm-platform.xml]() file.
      </p>
      <p>
        <strong>Example:</strong>
        <code>&lt;job-acquisition&gt;default&lt;/job-acquisition&gt;</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>&lt;configuration&gt;</code></td>
    <td><code>&lt;process-engine&gt;</code></td>
    <td>false</td>
    <td>
      <p>
        Provide the name of the process engine configuration class.
      </p>
      <p>
        <strong>Attributes:</strong>
        None.
      </p>
      <p>
        <strong>Text Content:</strong>
        the fully qualified classname of the Process Engine Configuration class to use for this process engine. The class must be a subclass of <a href="http://docs.camunda.org/api-references/java/org/camunda/bpm/engine/impl/cfg/ProcessEngineConfigurationImpl.html">ProcessEngineConfigurationImpl</a>.
      </p>
      <p>
        <strong>Default Value:</strong>
        <a href="http://docs.camunda.org/api-references/java/org/camunda/bpm/engine/impl/cfg/StandaloneProcessEngineConfiguration.html">StandaloneProcessEngineConfiguration</a>.
      </p>
      <p>
        <strong>Example:</strong>
        <code>&lt;configuration&gt;my.custom.ProcessEngineConfiguration&lt;/configuration&gt;</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>&lt;datasource&gt;</code></td>
    <td><code>&lt;process-engine&gt;</code></td>
    <td>false</td>
    <td>
      <p>
        Provide the JDBC name of the datasource to use for the process engine.
      </p>
      <p>
        <strong>Attributes:</strong>
        None.
      </p>
      <p>
        <strong>Text Content:</strong>
        Jdbc name of the datasource to use for this process engine.
      </p>
      <p>
        <strong>Default Value:</strong>
        null.
      </p>
      <p>
        <strong>Example:</strong>
        <code>&lt;datasource&gt;java:jdbc/ProcessEngine&lt;/datasource&gt;</code>
      </p>
    </td>
  </tr>
  <tr>
    <td><code>&lt;properties&gt;</code></td>
    <td><code>&lt;process-engine&gt;</code>, <code>&lt;plugin&gt;</code></td>
    <td>false</td>
    <td>
      <p>
        Container element for providing a set of process engine configuration (or plugin) properties.
      </p>
      <p>
        <strong>Attributes:</strong>
        None.
      </p>
      <p>
        <strong>Text Content:</strong>
        None.
      </p>
    </td>
  </tr>
  <tr>
    <td><code>&lt;property&gt;</code></td>
    <td><code>&lt;properties&gt;</code></td>
    <td>false</td>
    <td>
      <p>
        Set value for process engine configuration property or of a process engine plugin.
      </p>
      <p>
        <strong>Attributes:</strong>
        <ul>
          <li>`name`: the name of the property to be set (Required). The process engine configuration (or plugin) class must provide a setter method setXXX() for the property name.</li>
        </ul>
      </p>
      <p>
        <strong>Text Content:</strong>
        The value of the property to be set. Property values are converted into String, Integer, Boolean depending on the type of the setter in the process engine configuration (or plugin) class.
      </p>
      <p>
        <strong>Example:</strong> <br>
        `<property name="authorizationEnabled">true</property>`
      </p>
    </td>
  </tr>
  <tr>
    <td><code>&lt;plugins&gt;</code></td>
    <td><code>&lt;process-engine&gt;</code></td>
    <td>false</td>
    <td>
      <p>
        Container element for providing a set of <a href="/guides/user-guide/#!/#bpmplatform/engine/plugins">process engine plugin</a> configurations.
      </p>
      <p>
        <strong>Attributes:</strong>
        None.
      </p>
      <p>
        <strong>Text Content:</strong>
        None.
      </p>
    </td>
  </tr>
  <tr>
    <td><code>&lt;plugin&gt;</code></td>
    <td><code>&lt;plugins&gt;</code></td>
    <td>false</td>
    <td>
      <p>
        Container element for providing an individual <a href="/guides/user-guide/#!/#bpmplatform/engine/plugins">process engine plugin</a> configuration.
      </p>
      <p>
        <strong>Attributes:</strong>
        None.
      </p>
      <p>
        <strong>Text Content:</strong>
        None.
      </p>
    </td>
  </tr>
  <tr>
    <td><code>&lt;class&gt;</code></td>
    <td><code>&lt;plugin&gt;</code></td>
    <td>false</td>
    <td>
      <p>
        Sets the classname of a <a href="/guides/user-guide/#!/#bpmplatform/engine/plugins">process engine plugin</a>.
      </p>
      <p>
        <strong>Attributes:</strong>
        None.
      </p>
      <p>
        <strong>Text Content:</strong>
        The fully qualified classname of a process engine plugin. Must be an implementation of <a href="http://docs.camunda.org/api-references/java/org/camunda/bpm/engine/impl/cfg/ProcessEnginePlugin.html">ProcessEnginePlugin</a>
      </p>
    </td>
  </tr>
</table>

Configuration Properties
------------------------

The following is a list with the most commonly used process engine configuration properties along with some explanations. The properties can be used in the `<property name="foo">bar</property>` tag, where `foo` is the name of the property and `bar` is the value of the property.

<table class="table table-striped">
  <tr>
    <th>Property name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`authorizationEnabled`</td>
    <td>boolean</td>
    <td>Turns on authorization checks.</td>
  </tr>
  <tr>
    <td>`databaseSchemaUpdate`</td>
    <td>String</td>
    <td>
      <p>
        Sets the value for process engine database schema creation.
      </p>
      <p>
        <strong>Values:</strong> `false`, `create-drop`, `true`.
      </p>
    </td>
  </tr>

  <tr>
    <td>`jdbcDriver`</td>
    <td>String</td>
    <td>
      <p>
        Sets the fully qualified classname of the jdbc driver to use.
      </p>
      <p>
        This is usually used if the process engine is NOT configured using a `<datasource>` (see above) but using the built-in mybatis connection pool.
      </p>
    </td>
  </tr>
  <tr>
    <td>`jdbcUrl`</td>
    <td>String</td>
    <td>
      <p>
        Sets the jdbc url for the database connection.
      </p>
      <p>
        This is usually used if the process engine is NOT configured using a `<datasource>` (see above) but using the built-in mybatis connection pool.
      </p>
    </td>
  </tr>
  <tr>
    <td>`jdbcUsername`</td>
    <td>String</td>
    <td>
      <p>
        Sets the username of the jdbc connection.
      </p>
      <p>
        This is usually used if the process engine is NOT configured using a `<datasource>` (see above) but using the built-in mybatis connection pool.
      </p>
    </td>
  </tr>
  <tr>
    <td>`jdbcPassword`</td>
    <td>String</td>
    <td>
      <p>
        Sets the password of the jdbc connection.
      </p>
      <p>
        This is usually used if the process engine is NOT configured using a `<datasource>` (see above) but using the built-in mybatis connection pool.
      </p>
    </td>
  </tr>

  <tr>
    <td>`history`</td>
    <td>String</td>
    <td>
      <p>
        Sets the level of the process engine history.
      </p>
      <p>
        <strong>Values:</strong> `none`, `activity`, `audit`, `full`.
      </p>
    </td>
  </tr>
</table>