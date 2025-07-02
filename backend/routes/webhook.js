const express = require('express');
const router = express.Router();
const supabase = require('../services/supabaseClient');

// WhatsApp webhook endpoint
router.post('/webhook', async (req, res) => {
  const { From, Body } = req.body;
  // Find or create user
  let { data: users } = await supabase.from('users').select('*').eq('phone', From);
  let user = users && users[0];
  if (!user) {
    const { data: newUser } = await supabase
      .from('users')
      .insert([{ phone: From, preferences: ['english'] }])
      .select()
      .single();
    user = newUser;
  }
  // Handle user messages (e.g., set preferences)
  res.send('<Response></Response>');
});

module.exports = router;