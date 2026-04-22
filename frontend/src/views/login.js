import { supabase } from '../lib/supabaseClient'

// Contoh fungsi login nganggo Supabase
const handleLogin = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })
  
  if (error) console.log('Error login:', error.message)
  else console.log('Berhasil login:', data)
}

export default Login;