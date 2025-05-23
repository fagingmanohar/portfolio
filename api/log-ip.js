import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const token = process.env.IPINFO_TOKEN;

  try {
    const response = await fetch(`https://ipinfo.io/${ip}?token=${token}`);
    const data = await response.json();

    const logEntry = {
      ip: data.ip,
      city: data.city,
      region: data.region,
      country: data.country,
      org: data.org,
      loc: data.loc,
      userAgent: userAgent,
    };

    const { error } = await supabase.from('visitors').insert([logEntry]);

    if (error) throw error;

    res.status(200).json({ message: 'IP logged to Supabase', log: logEntry });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Logging failed' });
  }
}
