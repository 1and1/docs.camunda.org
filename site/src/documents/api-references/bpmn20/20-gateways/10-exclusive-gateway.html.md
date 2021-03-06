---

title: 'Data-based Exclusive Gateway (XOR)'
shortTitle: 'Exclusive Gateway (XOR)'

category: 'Gateways'

keywords: ''

---


An exclusive gateway (also called the XOR gateway or more technical the exclusive data-based gateway), is used to model a decision in the process. When the execution arrives at this gateway, all outgoing sequence flow are evaluated in the order in which they are defined. The sequence flow which condition evaluates to true (or which doesn't have a condition set, conceptually having a 'true' defined on the sequence flow) is selected for continuing the process.

Note that only one sequence flow is selected when using the exclusive gateway. In case multiple sequence flow have a condition that evaluates to true, the first one defined in the XML (and only that one!) is selected for continuing the process.

If no sequence flow can be selected (no condition evaluates to true) this will result in a runtime exception unless you have a default flow defined. There can be one default flow set on the gateway itself in case no other condition matched - like an 'else' in programming languages.


<div data-bpmn-diagram="implement/exclusive-gateway"></div>


Note that a gateway without an icon inside defaults to an exclusive gateway, even if we recommend to use the X within the gateway if your BPMN tool leaves the choice to you.

The XML representation of an exclusive gateway is straight-forward: one line defining the gateway and condition expressions defined on the outgoing sequence flow. The default flow (optional) is set as attribute on the gateway itself. Note that the name of the flow (used in the diagram, meant for the human being) might be different to the formal expression (used in the engine).


```xml
<exclusiveGateway id="exclusiveGw" name="Exclusive Gateway" default="flow4" />
    
<sequenceFlow id="flow2" sourceRef="exclusiveGw" targetRef="theTask1" name="${x==1}">
  <conditionExpression xsi:type="tFormalExpression">${x == 1}</conditionExpression>
</sequenceFlow>
    
<sequenceFlow id="flow3" sourceRef="exclusiveGw" targetRef="theTask2" name="${x==2}">
  <conditionExpression xsi:type="tFormalExpression">${x == 2}</conditionExpression>
</sequenceFlow>
    
<sequenceFlow id="flow4" sourceRef="exclusiveGw" targetRef="theTask3" name="else">
</sequenceFlow>
```

## Additional Resources

*   [Conditional and Default Sequence Flows](ref:#gateways-conditional-and-default-sequence-flows)
*   [Exclusive Gateway in the BPMN 2.0 Tutorial](http://camunda.org/design/reference.html#!/gateways/xor)