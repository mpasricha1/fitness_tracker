const db = require("../models")

module.exports = (app) => {
	app.get("/api/workouts", async (req, res) =>{
		try{
			let data = await getAndSumDuration();
			res.json(data)
		}catch(err) {
			res.status(500)
		}
	});

	app.put("/api/workouts/:id", async ({body, params}, res) => {
		let newWorkout = await db.Workout.findOneAndUpdate({_id: params.id}, {$push: {exercises: body}}, {new: true})
		res.json(newWorkout)
	});

	app.post("/api/workouts", async (req, res) =>{
		try{
		   let newWorkout = await db.Workout.create({})
		   res.json(newWorkout)
		   console.log(newWorkout); 
		}catch (err){
			res.status(500)
		}
	})

	app.get("/api/workouts/range", async (req, res) =>{
		try{
			let data = await getAndSumDuration();
			res.json(data)
		}catch(err) {
			res.status(500)
		}
	})	
}

const getAndSumDuration = async () =>{
	try{
		let data = await db.Workout.aggregate([
			{
				$addFields: {
					totalDuration: {$sum: "$exercises.duration"}
				}
			}
		])
		console.log(data)
		return (data)
	}catch(err){
		console.log(err); 
	}		
}