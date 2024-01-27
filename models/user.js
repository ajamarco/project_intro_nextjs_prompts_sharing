import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username already exists"],
    //create a match key to check if the username is alphanumeric and not empty
    match: [/^[a-zA-Z0-9]+$/, "Username must be alphanumeric"],
  },
  image: {
    type: String,
  },
});

//the models object (provided by mongoose) will store all registered models.
//If a model with the given name exists, it will be returned; otherwise, it will be created and returned.
const User = models.User || model("User", userSchema);

export { User };
