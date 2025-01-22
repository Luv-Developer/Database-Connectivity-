const express = require('express');
const { createClient } = require('@supabase/supabase-js');

// Initialize Express app
const app = express();
app.use(express.json());

// Supabase configuration
const supabaseUrl = 'https://srbxijvrxjmujzggntcz.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyYnhpanZyeGptdWp6Z2dudGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NjA3NTAsImV4cCI6MjA1MzEzNjc1MH0.PzL1fCsIrB7MAzxM2bl8-bQ5kKuCHXgCOgLLHp4E-C4'; // Replace with your Supabase anon/public key
const supabase = createClient(supabaseUrl, supabaseKey);
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.get("/create-user",(req,res)=>{
    res.render("data")
})
// Route to insert data into Supabase
app.post('/create-user', async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
        // Insert data into the 'users' table
        const { data, error } = await supabase
            .from('users')
            .insert([{name,email}]);

        if (error) {
            throw error;
        }

        res.status(201).json({ message: 'User created successfully', data });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});