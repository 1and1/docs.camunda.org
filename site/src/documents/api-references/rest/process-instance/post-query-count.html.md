Get Instances Count (POST)
==========================

Query for the number of process instances that fulfill given parameters.
This method takes the same message body as the <a href="#!/process-instance/post-query" doc-location-highlight>POST query</a>
and is thus slightly more powerful than the <a href="#!/process-instance/get-query-count" doc-location-highlight>GET query count</a>.


Method
------

POST `/process-instance/count`


Parameters
----------

#### Request Body

A json object with the following properties:

<table class="table table-striped">
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>businessKey</td>
    <td>Filter by process instance business key.</td>
  </tr>
  <tr>
    <td>processDefinitionId</td>
    <td>Filter by the process definition the instances run on.</td>
  </tr>
  <tr>
    <td>processDefinitionKey</td>
    <td>Filter by the key of the process definition the instances run on.</td>
  </tr>
  <tr>
    <td>superProcessInstance</td>
    <td>Restrict query to all process instances that are sub process instances of the given process instance. Takes a process instance id.</td>
  </tr>
  <tr>
    <td>subProcessInstance</td>
    <td>Restrict query to all process instances that have the given process instance as a sub process instance. Takes a process instance id.</td>
  </tr>
  <tr>
    <td>active</td>
    <td>Only include active process instances. Values may be `true` or `false`.</td>
  </tr>
  <tr>
    <td>suspended</td>
    <td>Only include suspended process instances. Values may be `true` or `false`.</td>
  </tr>
  <tr>
    <td>variables</td>
    <td>A json array to only include process instances that have variables with certain values. <br/>
    The array consists of objects with the three properties `key`, `operator` and `value`.
    `key (String)` is the variable name, `operator (String)` is the comparison operator to be used and `value` the variable value.<br/>
    `value` may be `String`, `Number` or `Boolean`.
    <br/>
    Valid operator values are: `eq` - equals; `neq` - not equals; `gt` - greater than;
    `gteq` - greater than or equals; `lt` - lower than; `lteq` - lower than or equals;
    `like`.<br/>
    </td>
  </tr>
</table>


Result
------

A json object that contains the count as the only property.

<table class="table table-striped">
  <tr>
    <th>Name</th>
    <th>Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>count</td>
    <td>Number</td>
    <td>The number of matching process instances.</td>
  </tr>
</table>


Response codes
--------------

<table class="table table-striped">
  <tr>
    <th>Code</th>
    <th>Media type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>200</td>
    <td>application/json</td>
    <td>Request successful.</td>
  </tr>
  <tr>
    <td>400</td>
    <td></td>
    <td>Returned if some of the query parameters are invalid, for example if a `sortOrder` parameter is supplied, but no `sortBy`
    or if an invalid operator for variable comparison is used.</td>
  </tr>
</table>


Example
-------

#### Request

POST `/process-instance/count`

Request body:

    {"variables": 
        [{"name": "myVariable",
         "operator": "eq",
         "value": "camunda"
        },
        {"name": "mySecondVariable",
         "operator": "neq",
         "value": 124}],
    "definitionId":"aProcessDefinitionId"}

#### Response

    {"count": 1}