// Trigger your loop
const response = await fetch('https://magicloops.dev/api/loop/d31a238c-1820-4943-809b-ddfc61ea1431/run', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    "meeting_id": "123456789"
  })});
  const data = await response.json();
  console.log(data);