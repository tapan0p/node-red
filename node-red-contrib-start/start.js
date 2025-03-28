module.exports = function(RED) {
    function NodeOne(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        // Store the prompt from the configuration
        node.prompt = config.prompt;
        
        // Optional: Log the prompt value
        node.log("Prompt: " + node.prompt);
        
        // Process incoming messages and attach the prompt property
        node.on('input', function(msg) {
            msg.prompt = node.prompt;
            node.send(msg);
        });
    }
    RED.nodes.registerType("start", NodeOne);
}
