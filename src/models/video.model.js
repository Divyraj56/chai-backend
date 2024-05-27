import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-peginate-v2"; 

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // cloudinary url
      required: true,
    },
    thumbnail: {
      type: String, // cloudinary url
      required: true,
    },
    title: {
      type: String, 
      required: true,
    },
    description: {
      type: String, 
      required: true,
    },
    duration: {
      type: Number,  // cloudinary will give duration
      required: true,
    },
    views:{
        type: Number,
        default: 0,
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner:{
        types : Schema.Types.ObjectId,
        ref : "User"
    }
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate) // we can add our own plugin
export const Video = mongoose.model('Video',videoSchema);