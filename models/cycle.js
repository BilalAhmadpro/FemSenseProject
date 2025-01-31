const  mongoose = require("mongoose");

const cycleSchema = mongoose.Schema(
    {
       userID:
       {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true,
      l
       },
       cycleID:
       {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
       },
       periodID:
       {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true,
       },
       start_date:
       {
        type: Date,
        required: true
       },
       end_date:
       {
        type: Date,
        required: true
       },
       lutealphase:
       {
        type: Number,
        required: true,
        max:17
       },
       cyclelength:
       {
        type: Number,
        required: true,
        default: 0,
        min: 27,
        max: 35
       }

    }
)


module.exports =mongoose.model("Cycle", cycleSchema);