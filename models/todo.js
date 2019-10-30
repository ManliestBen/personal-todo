var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    title: {type: String, required: true},
    priority: {type: String, 
               enum: ["High", "Medium", "Low"],
               default: "Medium"
              },
    comments: {type: String}

},{
    timestamps: true
});

module.exports = mongoose.model('Todo', todoSchema);