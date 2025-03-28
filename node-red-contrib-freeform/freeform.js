module.exports = function(RED) {
    function FreeformNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        // Store the prompt text from the configuration
        node.prompt = config.prompt;
        node.log("Freeform Prompt: " + node.prompt);

        // When the node receives an input, attach the prompt to the message
        node.on('input', function(msg) {
            msg.prompt = node.prompt;
            node.send(msg);
        });
    }
    RED.nodes.registerType("freeform", FreeformNode);
}
