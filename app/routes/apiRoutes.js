const db = require("../models")

module.exports = (app) => {
	app.get("/api/workouts", async (req, res) =>{
		try{
			let data = await db.Workout.find({})
		}catch(err){
			console.log(err); 
		}

		res.json(data)
		
	})
}