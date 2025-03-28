module.exports = function(RED) {
    function FunctionNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.functionCode = config.functionCode;
        
        try {
            // Create a new function that accepts msg, node, and RED as parameters.
            node.fn = new Function("msg", "node", "RED", node.functionCode);
        } catch (err) {
            node.error("Error compiling function: " + err.message);
            return;
        }
        
        // Option 1: Set a node status so that it displays "Function Started" on the workspace.
        node.status({ fill: "green", shape: "dot", text: "Function Started" });
        
        // Option 2: Automatically send an output message indicating that the function has started.
        // Uncomment the line below if you want an initial message output.
        // node.send({ payload: "Function Started Message" });
        
        // Process incoming messages using the user-supplied function.
        node.on('input', function(msg) {
            try {
                var result = node.fn(msg, node, RED);
                // If the function returns a value, use it as the new message.
                if (result !== undefined) {
                    msg = result;
                }
                node.send(msg);
            } catch (err) {
                node.error("Error executing function: " + err.message, msg);
            }
        });
    }
    RED.nodes.registerType("dfunction", FunctionNode);
}
