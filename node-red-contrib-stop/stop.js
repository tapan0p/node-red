module.exports = function(RED) {
    function StopNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.log("Stop node activated: This is the end of the workflow.");
        
        node.on('input', function(msg) {
            node.log("Flow ended at the Stop node.");
        });
    }
    RED.nodes.registerType("stop", StopNode);
}
