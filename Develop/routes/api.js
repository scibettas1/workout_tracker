// for this stuff: router.post('/api/workouts', (req,res) => {

//most of the logic goes here

//similar to what we've done in the past, but with mongo syntax

//create, find, update, delete, etc



// Route to post our form submission to mongoDB via mongoose
app.post("/submit", ({body}, res) => {
    // Create a new user using req.body
  const user = new User(body)
  
    // Update this route to run the `setFullName` and `lastUpdatedDate` methods before creating a new User
    user.setFullName()
    user.updateDate()
    // You must create these methods in the model.
  
    User.create(user)
      .then(dbUser => {
        // If saved successfully, send the the new User document to the client
        res.json(dbUser);
      })
      .catch(err => {
        // If an error occurs, send the error to the client
        res.json(err);
      });
  });