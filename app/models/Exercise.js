const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const ExerciseSchema = new Schema({
	name: {
		type: String, 
		trim: true		
	}, 
	type: {
		type: String, 
		trim: true
	}, 
	weight: {
		type: Number,
		min: [0, "Weight cannot be negative"] 
		default: 0, 

	},
	sets: {
		type: Number, 
		min: [0, "Sets cannot be negative"], 
		default: 0
	}, 
	reps: {
		type: Number, 
		min: [0, "Reps cannot be negative"], 
		default: 0
	}, 
	duration: {
		type: Number, 
		min: [0, "Duration cannot be negative"], 
		default: 0

	}, 
	distance: {
		type: Number, 
		min: [0, "Distance cannot be negative"], 
		default: 0
	}, 
	isCardio: {
		type: Boolean, 
		default: false
	}
}); 

ExerciseSchema.methods.isCardio = () => {
	this.isCardio = true; 
	return this.isCardio; 
}

const Exercise = mongoose.model("Exercise", ExerciseSchema); 

module.exports = Exercise; 