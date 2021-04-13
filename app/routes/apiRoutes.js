const db = require("../models")

module.exports = (app) => {
	app.get("/api/workouts", async (req, res) =>{
		try{
			let data = await db.Workout.find({})
			res.json(data)
		}catch(err){
			console.log(err); 
		}

		
		
	});

	app.put("/api/workouts/:id", async (req, res) =>{
		try{
			let dbExercise = await db.Exercise.create({type: req.body.type, name: req.body.name, 
								weight: req.body.weight, sets: req.body.sets, 
								reps: req.body.reps,duration: req.body.duration
			});
			
			await db.Workout.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: dbExercise["_id"]}}, {new: true})
			res.json(dbExercise)
		} catch(err){
			console.log(err);
		}	
	});

	app.post("/api/workouts", async (req, res) =>{
		try{
		   let newWorkout = await db.Workout.create({})
		   res.json(newWorkout)
		   console.log(newWorkout); 
		}catch (err){
			console.log(err)
		}
	})

	app.get("/api/workouts/range", async (req, res) =>{

	})
}