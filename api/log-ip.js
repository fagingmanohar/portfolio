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

    await fetch("export default async function handler(req, res) {
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

    await fetch("https://script.google.com/macros/s/AKfycbyQHr28M7mARUlZUIdPeFaOYQ_Vg_xysmlBbIVj5xoB-c1ZaywThQclZzKfMYUZO6_SlQ/exec", {
      method: "POST",
      body: JSON.stringify(logEntry),
      headers: { "Content-Type": "application/json" }
    });

    res.status(200).json({ message: 'IP logged', log: logEntry });
  } catch (error) {
    console.error("Error logging IP:", error);
    res.status(500).json({ error: 'Failed to log IP' });
  }
}
", {
      method: "POST",
      body: JSON.stringify(logEntry),
      headers: { "Content-Type": "application/json" }
    });

    res.status(200).json({ message: 'IP logged', log: logEntry });
  } catch (error) {
    console.error("Error logging IP:", error);
    res.status(500).json({ error: 'Failed to log IP' });
  }
}
