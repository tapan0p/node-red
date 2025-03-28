module.exports = function(RED) {
    function QuestionNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.questionText = config.questionText;
        node.answerType = config.answerType;
        node.choices = config.choices;

        // Debug logging
        node.log("Question: " + node.questionText);
        node.log("Answer Type: " + node.answerType);
        if (node.answerType === "multipleChoice") {
            node.log("Choices: " + node.choices);
        }

        node.on('input', function(msg) {
            // Optionally, if you need an array of choices, you can split the string:
            let choicesArray = (node.answerType === "multipleChoice" && node.choices) ?
                                node.choices.split(",").map(function(item) { return item.trim(); }) :
                                [];

            msg.question = {
                text: node.questionText,
                answerType: node.answerType,
                choices: choicesArray
            };
            node.send(msg);
        });
    }
    RED.nodes.registerType("question", QuestionNode);
}
